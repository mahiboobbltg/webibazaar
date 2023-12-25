
require("dotenv").config()
const express = require("express")
const formidable = require("express-formidable")
const app = express()
const bodyparser = require("body-parser")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")


const path = require("path")
const hbs = require("hbs")

//realted to database
require("./database/connection")
const reg = require("./model/register")
const product = require("./model/product")
const order = require("./model/order")
const Cart = require("./model/cart")

const verifyToken = require("./middleaware/authent")




// templates
const view_path = path.join(__dirname, "../views")
app.set("view engine", "hbs")
app.set("views ", view_path)


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyparser.json())

//API's
app.get("/", function (req, res) {
  res.render("index")
})

app.get("/register", formidable(), function (req, res) {
  res.render("register")
})


// api for userdata for post

app.post("/register", formidable(), async function (req, res) {
  let { userId, firstname, lastname, email, phone, password } = req.fields

  if (!(userId && firstname && lastname && email && phone && password)) {
    res.status(400).send("check your  inputs!!")
  }
  else {
    if (await reg.findOne({ email })) {
      res.status(400).send("user already exists!!!")

    } else {

      const enccryptpassword =await bcrypt.hash(req.fields.password, 10)
      const dataobj = await reg.create({
        userId: req.fields.userId,
        firstname: req.fields.firstname,
        lastname: req.fields.lastname,
        email: req.fields.email,
        phone: req.fields.phone,
        password: enccryptpassword
      })

      let usertoken = jwt.sign({ email }, process.env.Tokenkey, { expiresIn: "2hr" })
      dataobj.token = usertoken

      res.status(200).send("database is created " + " " + dataobj)
    }
  }
})

// api for login for post

app.post('/login', formidable(), async function (req, res) {
  let { email, password } = req.fields
  if (!(email && password)) {
    res.status(400).send('Provide all the inputs')
  }
  else {
    let user = await reg.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
      let usetoken = jwt.sign({ email }, process.env.Tokenkey, { expiresIn: "2hr" })
      user.token = usetoken
      res.json(user)
    }
    else {
      res.status(403).send('Incorrect username or password!!')
    }
  }
})

// api for login for homepage

app.get("/profile", verifyToken, function (req, res) {
  res.send("welcome to home page")
})



// api for product for post

app.post('/products', formidable(), async function (req, res) {
  try {
    let { productid, productname, description, price, category } = req.fields
    console.log(req.fields)
    if (!(productid && productname && description && price && category)) {
      res.status(400).send("check your  inputs!!")
    } else {
      const newProduct = await product.create({
        productid: req.fields.productid,
        productname: req.fields.productname,
        description: req.fields.description,
        price: req.fields.price,
        category: req.fields.category,
      });
      res.status(201).send("database is created for product" + " " + newProduct)
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// api for productdata 

app.get("/productdata", formidable(), function (req, res) {
  product.find({})
    .then((response) => {
      console.log("response", response);
      res.json({
        data: response,
        msg: 'Getting all the product data'
      });
    })
    .catch((err) => {
      res.send('error has occured', err);
    })
})

// updatedProduct
app.put("/updatedproduct/:id",  async (req, res) => {
  try {
    const updatedProduct = await product.findByIdAndUpdate(
      req.params.id,
       req.body,
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete Product

app.delete("/deleteproduct/:id", async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});




// api for order for post
app.post("/order",  async (req, res) => {

  try {
    const { products } = req.body; 

    // Create a new order
    const newOrder = new order({
      user: req.user._id, 
      products: products.map(product => ({
        product: product.productId,
        quantity: product.quantity
      }))
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
});



app.get("/getorderdata", formidable(), function (req, res) {
  order.find({})
    .then((response) => {
      console.log("response", response);
      res.json({
        data: response,
        msg: 'Getting all the order data'
      });
    })
    .catch((err) => {
      res.send('error has occured', err);
    })
})


//UPDATE
app.put("/updateorder/:id",  async (req, res) => {
  try {
    const updatedorder = await order.findByIdAndUpdate(
      req.params.id,
       req.body,
      { new: true }
    );
    res.status(200).json(updatedorder);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.delete("/deleteorder/:id", async (req, res) => {
  try {
    await order.findByIdAndDelete(req.params.id);
    res.status(200).json("order has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});



app.post("/ceatecart", async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE
app.put("/updatecart/:id",  async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE
app.delete("/deletecart/:id",  async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET USER CART
app.get("/singlecart/:userId",  async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL

app.get("/allcart", async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});






// Forgot Password 
app.post('/forgot-password', formidable(), async function (req, res) {
  try {
    const email = req.fields.email;

    const user = await reg.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log('token')

    // Generate random reset token for user
    const token = crypto.randomBytes(20).toString('hex');
    console.log(token)
    const resetExpires = Date.now() + 100 * 60 * 60;

    // Update user with reset token and expiration
    user.resetPasswordToken = token;
    user.resetPasswordExpires = resetExpires;
    await user.save();

    // Send reset password email for user
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port: 587,
      auth: {
        user: 'mahiboobbltg@gmail.com',
        pass: 'hqcjopsdscewtfqn'
      }
    });

    const mailOptions = {
      to: user.email,
      from: 'mahiboobbltg@gmail.com',
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
        `Please click on the following link, or paste this into your browser to complete the process:\n\n` +
        `http://localhost:3000/reset/${token}\n\n` +
        `If you did not request this, please ignore this email and your password will remain unchanged.\n`
    };

    transporter.sendMail(mailOptions, (error) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Error sending email' });
      }
      res.status(200).json({ message: 'Email sent successfully' });
    });

  } catch (err) {
    console.error('Error in forgot password:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});



//  handle password reset link clicks
app.get('/reset/:token', formidable(), async (req, res) => {
  try {
    const { token } = req.params;

    // Find user by reset token and check if it's valid and not expired
    const user = await reg.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Password reset link is invalid or expired please check again' });
    }

    //  password reset 
    res.send("this is a token of resetpassword" + " " + token); // Render the form with the token

  } catch (err) {
    console.error('Error in password reset:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});

//  handle a new password after reset
app.post('/handlereset/:token', formidable(), async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.fields;

    // Find user by reset token
    const user = await reg.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: 'Password reset link is invalid or expired' });
    }

    // Set the new password and clear token-related fields
    const enccryptpassword = await bcrypt.hash(password, 10)
    user.password = enccryptpassword;
    user.resetPasswordToken = undefined; // Clear/reset the token; you might consider removing it from the user object entirely if needed
    user.resetPasswordExpires = undefined; // Clear/reset the expiration
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });

  } catch (err) {
    console.error('Error in resetting password:', err);
    res.status(500).json({ message: 'Server Error' });
  }
});












const port = process.env.PORT
app.listen(port, () => console.log(`server is running at ${port} port`))








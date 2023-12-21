
require("dotenv").config()
const express = require("express")
const formidable = require("express-formidable")
const app = express()
const bodyparser = require("body-parser")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const path = require("path")
const hbs = require("hbs")

//realted to database
require("./database/connection")
const reg = require("./model/register")
const product = require("./model/product")

const verifyToken = require("./middleaware/authent")




// templates
const view_path = path.join(__dirname, "../views")
app.set("view engine", "hbs")
app.set("views ", view_path)


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyparser.json())

//API's
app.get("/",  function (req, res) {
    res.render("index")
})

app.get("/register", formidable(),  function (req, res) {
    res.render("register")
})

app.post("/register", formidable(), async function (req, res) {
    let  {userid , firstname, lastname, email, phone, password } = req.fields

    if (!(userid && firstname && lastname && email && phone && password)) {
        res.status(400).send("check your  inputs!!")
    }
    else {
        if (await reg.findOne({ email })) {
            res.status(400).send("user already exists!!!")

        } else {

            const enccryptpassword = await bcrypt.hash(req.fields.password, 10)
            const dataobj = await reg.create({
                userid: req.fields.userid,
                firstname: req.fields.firstname,
                lastname: req.fields.lastname,
                email: req.fields.email,
                phone: req.fields.phone,
                password: enccryptpassword
            })

            let usertoken = jwt.sign({ email }, process.env.Tokenkey, { expiresIn: "2hr" })
            dataobj.token = usertoken
           
            console.log(dataobj)
            res.status(200).send("database is created " + " " + dataobj)
        }
    }
})

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

app.get("/profile",verifyToken, function(req,res){
    res.send("welcome to home page")
})

// api for product for post

app.post('/products', formidable(), async function (req, res) {
    try {
        let { productid,productname, description, price, category } = req.fields
        console.log(req.fields)
        if (!( productid && productname && description && price && category)) {
            res.status(400).send("check your  inputs!!")
        } else {
            const newProduct =await product.create({
                productid:req.fields.productid,
                productname: req.fields.productname,
                description: req.fields.description,
                price: req.fields.price,
                category: req.fields.category,
            });
            res.status(201).send("database is created for product"+" "+ newProduct)
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

const port = process.env.PORT
app.listen(port, () => console.log(`server is running at ${port} port`))








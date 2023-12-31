const product = require("../model/product")



const createProduct=async function (req, res) {
    try {
      let { productid, productname, description, price, category } = req.fields
      // console.log(req.fields)
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
        res.status(201).send("database is created for product" )
      }
  
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

const getProduct=function (req, res) {
    product.find({})
      .then((response) => {
        // console.log("response", response);
        res.json({
          data: response,
          msg: 'Getting all the product data'
        });
      })
      .catch((err) => {
        res.status(404).send('error has occured', err);
      })
  }

  const getProductById = async (req, res) => {
  
    const item = await product.findById(req.params.id);
    if (item) {
      return res.json(item);
    } else {
     
      res.status(404);
      throw new Error('Product not found');
    }
  }





const updateProduct= async (req, res) => {
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
  }


const deleteProduct=async (req, res) => {
    try {
      await product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }







module.exports={createProduct,getProductById, getProduct,updateProduct,deleteProduct}








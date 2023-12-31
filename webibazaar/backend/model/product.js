const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  productid: {
    type: String,
    unique: true,
  },
  productname: {
    type: String,
  },
  description: String,
  price: {
    type: Number,
  },
  

  category: {
    type: String,
  },


})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

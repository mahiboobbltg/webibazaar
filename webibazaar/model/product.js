const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

productid:{
  type: String,
  unique: true,
  required: true
},

    productname: {
    type: String,
    required: true
  },
  description: String,
  price: {
    type: Number,
    required: true
  },
  
  category: {
    type: String,
    required: true
  },
  
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const Cart = require("../model/cart")


const createCart=async function(userId, productId, quantity) {
    try {
  
      
      const product = await product.findById(productId);
  
      if (!product) {
        throw new Error('Product not found');
      }
  
      if (product.quantity < quantity) {
        throw new Error('Insufficient product quantity');
      }
  
      // Decrease product quantity in inventory
      product.quantity -= quantity;
      await product.save();
  
      // Add product to the user's cart
      const userCart = await Cart.findOneAndUpdate(
        { user: userId },
        {
          $addToSet: {
            products: { product: productId, quantity },
          },
        },
        { upsert: true, new: true }
      );
  
      return userCart;
    } catch (err) {
      throw new Error(err.message);
    }
  }

const getCart=async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

const updateCart=async (req, res) => {
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
  }
  
const deleteCart=async (req, res) => {
    try {
      await Cart.findByIdAndDelete(req.params.id);
      res.status(200).json("Cart has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }












module.exports={createCart,getCart,updateCart,deleteCart}
const express=require("express")


const {createCart, getCart,updateCart,deleteCart}=require('../controllers/cartCntr')
const formidable = require("express-formidable")

const router=express.Router()

router.post('/createCart', formidable(),createCart)
router.get('/getCart', formidable(),getCart)
router.put('/updateCart/:id', formidable(),updateCart)
router.delete('/deleteCart/:id', formidable(),deleteCart)





module.exports=router
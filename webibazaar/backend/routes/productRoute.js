const express=require("express")


const {createProduct, getProduct,updateProduct,deleteProduct}=require('../controllers/productCntr')
const formidable = require("express-formidable")

const router=express.Router()

router.post('/createProduct', formidable(),createProduct)
router.get('/getProduct', formidable(),getProduct)
router.put('/updateProduct/:id', formidable(),updateProduct)
router.delete('/deleteProduct/:id', formidable(),deleteProduct)





module.exports=router

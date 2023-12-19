const mongoose=require("mongoose")

const resetSchema=mongoose.Schema({
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
})

const resetpassword=mongoose.model("resetdata", resetSchema)
module.exports=resetpassword
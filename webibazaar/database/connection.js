const mongoose=require("mongoose")
const MONGO_URI=process.env.MONGO_URI

mongoose.connect(MONGO_URI)
.then(()=>console.log("database connected"))
.catch(()=>console.log("database is not connected"))













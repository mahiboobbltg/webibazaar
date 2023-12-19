
require("dotenv").config()
const express = require("express")
const formidable = require("express-formidable")
const app = express()




//realted to database
require("./database/connection")
const reg = require("./model/register")






app.post("/register", formidable(), async function (req, res) {
    try {
        let { firstname, lastname, email, phone, password } = req.fields
    //    console.log(req.fields)
        if (!(firstname && lastname && email && phone && password)) {
            res.status(400).send("check your  inputs!!")
        }
        else {
            const dataobj =  reg.create({
                firstname: req.fields.firstname,
                lastname: req.fields.lastname,
                email: req.fields.email,
                phone: req.fields.phone,
                password: req.fields.password
            })
            res.status(200).send("database is created")
        }
    }
    catch (error) {
       res.status(400).send(" check your details entered !!!")
    }
})

const port = process.env.PORT
app.listen(port, () => console.log(`server is running at ${port} port`))








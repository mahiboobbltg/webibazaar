const mongoose = require("mongoose")

const registerSchema = mongoose.Schema({

    userId: {
        type: String,
        unique: true,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
    resetPasswordToken: String,
  resetPasswordExpires: Date,
})

const register = mongoose.model("registerdata", registerSchema)
module.exports = register





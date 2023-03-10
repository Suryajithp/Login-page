const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    username:{
        type:String,
        reuired:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("users",userschema)
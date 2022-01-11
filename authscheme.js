const mongoose  = require("mongoose")

const Schema = mongoose.Schema({
    email:{type:String},
    password:{type:String}
}) 

const authData = mongoose.model('authData',Schema)
module.exports= authData
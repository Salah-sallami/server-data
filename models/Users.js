const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
   name:{type:String} ,
   phone:{type:String},
   address:{type:String},
   email:{type:String},
   Size:{type:String},
   quantity:{type:String},
   total:{type:String},

})

const UserModel = mongoose.model("getlogo",UserSchema)
module.exports = UserModel
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstname:{ 
    type:String,
  required:[true,"Please provide firstname"]},
  lastname: {
    type:String,
    required:[true,"please provide lastname"]
  },
  email: {
    type:String,
    required:[true,"Please provide email"],
    unique:true,
  },
  password:
  {type:String,
    required:[true,"Please provide password"]
  }
})

module.exports = mongoose.model("user", UserSchema)

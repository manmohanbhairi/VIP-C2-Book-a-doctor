const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(

{

  name: {

    type: String,

    required: true,

    trim: true

  },


  email: {

    type: String,

    required: true,

    unique: true,

    lowercase: true,

    trim: true

  },


  password: {

    type: String,

    required: true

  },


  role: {

    type: String,

    enum: [
      "user",
      "admin"
    ],

    default: "user"

  },  

  phone: {
    type: String,
    default: "",
},

age: {
    type: Number,
    default: 0,
},

gender: {
    type: String,
    default: "",
},

address: {
    type: String,
    default: "",
},

profileImage: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
}


},

{
  timestamps: true
}

);



module.exports = mongoose.model(
  "User",
  userSchema
);
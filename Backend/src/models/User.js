const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name:{
      type: String,
      required: true 
    },

    socialMediaHandle: {
      type: String,
      required: true 
    },

    images: {
      type: [String],
      default:[]
    },
    
},{timestamps : true});

module.exports = mongoose.model("User", UserSchema);

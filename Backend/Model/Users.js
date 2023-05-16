const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please add a name"],
        trim : true
    },
    email:{
        type:String,
        required: [true,"Please add an email"],
        trim: true,
        unique : true,
        lowercase : true
    },
    Password:{
        type:String, 
        required: [true,"Please add a password"],
        trim : true,
        minLength : 8,
    },
      MobileNumber:{
        type: Number,
        // max :11
    },
    Address:{
        type: String,
    },
    City:{
        type: String,
    },
    PostalCode:{
        type: Number,
    },
    Country:{
        type: String,
    },
    Image: {
        type: String
    },
});

module.exports = mongoose.model("users",UserSchema);
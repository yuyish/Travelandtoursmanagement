const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true,"Please add a name"]
    },
    email:{
        type:String,
        required: [true,"Please add an email"]
    },
    Password:{
        type:String,
        required: [true,"Please add a password"]
    }
});

module.exports = mongoose.model("Customers",UserSchema);
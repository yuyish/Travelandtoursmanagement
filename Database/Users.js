const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    Password:String
});

module.exports = mongoose.model("users",UserSchema);
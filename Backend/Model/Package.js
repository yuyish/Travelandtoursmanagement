const mongoose = require('mongoose');

const PackageSchema = mongoose.Schema({
    packagename:{
        type:String,
        required: [true,"Please add a name"]
    },
    location:{
        type:String,
        required: [true,"Please add an Location"]
    },
    price:{
        type:Number,
        required: [true,"Please add a price"]
    },
    description:{
        type:String,
        required: [true,"Please add a description"]
    },
    Image:{
        data:Buffer,
        contentType:String
    }
});
module.exports = mongoose.model("Packages",PackageSchema);
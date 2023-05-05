// const mongoose = require('mongoose');

// const UserProfileSchema = new mongoose.Schema({
//     // Image: {
//     //     type: String
//     // },
//     UserId :{
//         type : mongoose.Types.ObjectId, 
//         ref : "users",
//         // default : true
//     } ,
//     Firstname:{
//         type: String,
//         required :[true,"Please Enter First name"]
//     },
//     Lastname:{
//         type: String,
//         required :[true,"Please Enter Last name"]
//     },
//     email:{
//         type:String,
//         required: [true,"Please add an email"],
//         trim: true,
//         unique : true,
//         lowercase : true
//     },
//     // MobileNumber:{
//     //     type: Number,
//     //     required :[true,"Please Enter Mobile Number"],
//     //     // max :11
//     // },
//     // Address:{
//     //     type: String,
//     //     required :[true,"Please Enter Address"],
//     // },
//     // City:{
//     //     type: String,
//     //     required :[true,"Please Enter City"]
//     // },
//     // PostalCode:{
//     //     type: Number,
//     //     required :[true,"Please Enter Postal Code"]
//     // },
//     // Country:{
//     //     type: String,
//     //     required :[true,"Please Enter Country"]
//     // },
    
// });

// module.exports = mongoose.model("Userprofile",UserProfileSchema); 
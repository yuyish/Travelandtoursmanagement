// const UserProfile = require('../Model/UserProfile');
// const mongoose = require("mongoose");


// // update profile

// const createprofie = async (req,res)=>{
//     try {
//         let Userid = req.params.id;
//         let profile =await UserProfile.create(req.body);
//         profile.UserId = Userid;
//         profile.save();
//         res.status(200).send({msg: "Profile Updated"});
//     } catch (error) {
//         res.status(500).send({msg: error.message}); 
//     }
// }

// module.exports={
//     createprofie,
// }
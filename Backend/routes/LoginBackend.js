const express=require('express');
const { CreateSignup, CreateLogin } = require('../controller/LogSigncontroller');
const {CreatePackage,ReadPackage} = require('../controller/Packagescontroller');
// const Users=require('../Model/Users');
// const Admin=require('../Model/Admin');
const router = express.Router();


// app.post("/Signup",async (req,res)=>{
//     let us = new Users(req.body);
//     let result = await us.save();
//     res.send(result);
// });


//Signup API
router.post("/Signup",CreateSignup);

// Login API
router.post("/login",CreateLogin);
//package create
router.post("/Package",CreatePackage);

router.get("/readPackage",ReadPackage);
module.exports = router;
const express=require('express');
const { CreateSignup, CreateLogin } = require('../controller/LogSigncontroller');
const {CreatePackage,ReadPackage,ReadSinglePackage,deletepackage, UpdatePackage} = require('../controller/Packagescontroller');
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
router.post("/api/Package",CreatePackage);
// get multiple packages
router.get("/api/readPackage",ReadPackage);
// get single package
router.get("/api/Packages/:location",ReadSinglePackage);
// delete a package
router.delete("/api/Packages/:packagename",deletepackage);
// Update a package
router.put("/api/Packages/:packagename",UpdatePackage);

module.exports = router;
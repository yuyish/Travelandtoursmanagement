const express=require('express');
const { CreateSignup, CreateLogin ,UserUpdate} = require('../controller/LogSigncontroller');
const {CreatePackage,ReadPackage,ReadSinglePackage,deletepackage, UpdatePackage} = require('../controller/Packagescontroller');
// const { createprofie } = require('../controller/UserprofileController');

// const Users=require('../Model/Users');
// const Admin=require('../Model/Admin');
const router = express.Router();




//Signup API
router.post("/Signup",CreateSignup);

// Login API
router.post("/login",CreateLogin);

//package create
router.post("/api/Package",CreatePackage);

// get multiple packages
router.get("/api/readPackage",ReadPackage);

// get single package
router.post("/api/Packages/:location",ReadSinglePackage);

// delete a package
router.delete("/api/Packages/:packagename",deletepackage);

// Update a package
router.put("/api/Packages/:packagename",UpdatePackage);
// Update Profile
router.put("/profile/:email",UserUpdate);

// 
// router.get("/profile/:id",createprofie);
module.exports = router;
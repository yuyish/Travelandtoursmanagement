const express=require('express');
const cors = require('cors');
require('./Database/Config');
const Users=require('./Database/Users');
const app = express();
const port=80;
app.use(express.json());
app.use(cors());
app.post("/Signup",async (req,res)=>{
    let us = new Users(req.body);
    let result = await us.save();
    res.send(result);
})

app.post("/login",async (req,res)=>{
    // console.log(req.body);
    if(req.body.email && req.body.Password){
        let user = await Users.findOne(req.body).select("-Password");
        console.log(user);
        if(user){
            res.send(user);
        }else{
            res.send({result: "User not found"});
        }
    }else{
        res.send({result: "Email or Password not found"});
    }
})

app.listen(port);
const express=require('express');
const cors = require('cors');
require('./Database/Config');
const User=require('./Database/Users');
const app = express();
const port=80;
app.use(express.json());
app.use(cors());
app.post("/Signup",async (req,res)=>{
    let us = new User(req.body);
    let result = await us.save();
    res.send(result);
})

app.post("/login",async (req,res)=>{
    console.log(req.body);
    // if(req.body.email && req.body.Password){
        let user = await User.findOne(req.body).select("-Password");
        // console.log(user);
        if(user){
            res.send(user);
        }else{
            res.send({result: "-----"});
        }
    // }else{
    //     res.send({result: "No User Found"});
    // }
})

app.listen(port);
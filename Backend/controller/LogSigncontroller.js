const Users=require('../Model/Users');
const Admin=require('../Model/Admin');
// Signup Function
const CreateSignup =async (req,res)=>{
    try {
        const result = await Users.create(req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({msg: error.message}); 
    }
};

// Login Function 
const CreateLogin =async (req,res)=>{
    // console.log(req.body);
    if(req.body.email && req.body.Password){
        let admin = await Admin.findOne(req.body).select("-Password");
        console.log(admin);
        if(admin){
            res.status(200).send(admin);
            res.end();
        }else{
            let user = await Users.findOne(req.body).select("-Password");
        console.log(user);
        if(user){
            res.status(200).send(user);
        }else{
            res.status(500).send({result: "Cannot find any data in database"});
        }
        }
        
    }else{
        res.status(500).send({result: "Email or Password not found"});
    }
};

const UserUpdate = async (req,res)=>{
    try {
        
    let eid = req.params;
    console.log(eid);
    eid = eid.email;
    let update = await Users.findOne({email: `${eid}`});
    let id = update.id;
    let updatepf = await Users.findByIdAndUpdate({_id:id}, req.body , {
        new:true,
        runValidators : true,
    });
    if(!updatepf){
        return res.status(404).json({msg:"Cannot update the data"});
    }
    res.status(200).json({msg:"Successfully updated"});
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
}

module.exports={
    CreateSignup,
    CreateLogin,
    UserUpdate
}
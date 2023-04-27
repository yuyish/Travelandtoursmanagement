const package=require('../Model/Package');

const CreatePackage=async(req,res)=>{
    try {
        let Task = await package.create(req.body);
        res.status(200).send(Task);
    } catch (error) {
        res.status(500).send({msg: error.message}); 
    }
};

const ReadPackage = async (req,res)=>{
    try {
        let Task = await package.find();
        res.status(200).json(Task);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

module.exports={
    CreatePackage,
    ReadPackage
}
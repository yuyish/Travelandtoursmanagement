const Package=require('../Model/Package');
// create package API
const CreatePackage=async(req,res)=>{
    try {
        let Task = await Package.create(req.body);
        Task.save();
        res.status(200).send(Task);
    } catch (error) {
        res.status(500).send({msg: error.message}); 
    }
};
// Read all the documents in Package
const ReadPackage = async (req,res)=>{
    try {
        let Task = await Package.find();
        res.status(200).json(Task);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
};
// Read only one in the package
const ReadSinglePackage = async (req,res)=>{
    try {
        let loc=req.params; // get the parameter from the url
        loc = loc.location;
        let task = await Package.findOne({location:`${loc}`});  // search the entered location in the database
        if(!task){
            return res.status(404).json(`Not found any packages matching the : ${loc}`);  // returns error when not found the searched location
            // during implementation of the api it might not found the value because of whitespaces during the sending
            //  of location. So make sure to use trim function in Reactjs
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }  
};
// Delete the package 
// Still some  errors
const deletepackage = async (req,res)=>{
    try {
        let packname = req.params;
        console.log(packname);
        packname = packname.packagename;
        let task = await Package.findOneAndDelete({packagename:`${packname}`});
        if(!task){
            return res.status(404).json(`Cannot find the package: ${packname}`);
        }
        res.status(200).send("task deleted Successfully");
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
};

// Update the task
// completed byt might contain some flaws

const UpdatePackage = async (req,res)=>{
    try {
        let packname = req.params;
        packname = packname.packagename;
        console.log(packname);
        let ts = await Package.findOne({packagename:`${packname}`});
        let id = ts.id;
        console.log(id);
        let task = await Package.findByIdAndUpdate({_id:id}, req.body , {
            new:true,
            runValidators : true,
        });
        if(!task){
           return res.status(404).json(`Cannot find the package: ${packname}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

module.exports={
    CreatePackage,
    ReadPackage,
    ReadSinglePackage,
    deletepackage,
    UpdatePackage
}
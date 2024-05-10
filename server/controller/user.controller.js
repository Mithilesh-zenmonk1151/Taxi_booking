const {userService}= require("../service");
exports.updateUser=async(req,res)=>{
    try{
        
        const response= await userService.updateUser(req);
        res.status(200).json({response})

    }
    catch(error){
        console.log(error);

    }
}
exports.getUsers=async(req,res)=>{
    try{
        
        const response= await userService.getUsers(req);
        res.status(200).json({response})

    }
    catch(error){
        console.log(error);

    }
}

const {authService} = require("../service");
const CustomError = require("../utils/error");
exports.register=async(req,res)=>{
  try{
    const response= await authService.register(req);
    res.status(201).json({response})
  }
  catch(error){
    console.log(error);
    throw new CustomError("Internal server error",500);

  }
    
}
exports.login= async(req,res)=>{
    try{
        const response= await authService.login(req);
        res.status(200).json({response})

    }
    catch(error){
        console.log(error);
        throw new CustomError("Internal Server error",500);

    }
}
const {authService} = require("../service");
const CustomError = require("../utils/error");
exports.register=async(req,res)=>{
  try{
    const response= await authService.register(req);
    res.status(201).json({response})
  }
  catch(error){
    console.log(error);
    

  }
    
}
exports.login= async(req,res)=>{
    try{
        const response= await authService.login(req);
        console.log("REsponse===",response);
        res.status(200).json({response})

    }
    catch(error){
        console.log(error);

    }
}
// exports.getUsers=async(req,res)=>{
//   try{
//     const response= await authService.getUsers(req);
//     res.status

//   }
//   catch(error){

//   }
// }
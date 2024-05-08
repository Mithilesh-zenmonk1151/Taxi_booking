const {carService}= require("../service");
const CustomError = require("../utils/error");
exports.addCar= async(req,res)=>{
    try{
        console.log("addddDD=======================");
        const response= await carService.addCar(req);
        res.status(201).json({response})

    }
    catch(error){
        throw new CustomError("Internal Server Error",500);

    }
}
exports.approvedByAdmin=async(req,res)=>{
    try{
        const response= await carService.approvedByAdmin(req);
        res.status(200).json({response});

    }
    catch(error){
        throw new CustomError("Internal server error",500)
    }
}
exports.getAllCars=async(req,res)=>{
    try{
        const response= await carService.getAllCars(req);
        res.status(200).json({response});

    }
    catch(error){
        throw new CustomError("Internal Server Error",500)
    }
}
exports.getApprovedCars=async(req,res)=>{
    try{
        
        const response=await carService.getApprovedCars(req);
        console.log("RRRRRRRR",response)
        res.status(200).json({response});

    }
    catch(error){
        throw new CustomError("Internal Server Error",500)

    }
}

exports.editCarInfo=async(payload)=>{
    try{

    }
    catch(error){
        
    }
}
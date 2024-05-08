const {rentedService}= require("../service");
const CustomError = require("../utils/error");
exports.addrentedCar=async(req,res)=>{
    try{
        const response= await rentedService.addrentedCar(req);
        res.status(201).json({response});

    }
    catch(error){
        throw new CustomError("Internal Server Error",500);

    }
}
exports.returnRentedCar= async(req,res)=>{
    try{
        const response=await rentedService.returnRentedCar(req);
        res.status(200).json({response});

    }
    catch(error){
        console.log("error");
    }
}
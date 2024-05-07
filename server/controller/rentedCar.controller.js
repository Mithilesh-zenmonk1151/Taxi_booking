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
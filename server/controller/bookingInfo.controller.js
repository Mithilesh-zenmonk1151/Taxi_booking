const {bookingService}= require("../service");
const CustomError = require("../utils/error");
exports.createBooking=async(req,res)=>{
    try{
        const response= await bookingService.createBooking(req);
        res.status(201).json({response});

    }
    catch(error){
        throw new CustomError("Internal Server Error",500);

    }
}
exports.updateBooking=async(req,res)=>{
    try{
        const response= await bookingService.updateBooking(req);
        res.status(200).json({response});

    }
    catch(error){
        throw new CustomError("Internal Server Error",500);

    }
}
const {bookingService}= require("../service");
const CustomError = require("../utils/error");
exports.createBooking=async(req,res)=>{
    try{
        const response= await bookingService.createBooking(req);
        res.status(201).json({response});

    }
    catch(error){
        // throw new CustomError("Internal Server Error",500);
        console.log(error);

    }
}
exports.updateBooking=async(req,res)=>{
    try{
        const response= await bookingService.updateBooking(req);
        res.status(200).json({response});

    }
    catch(error){
        // throw new CustomError("Internal Server Error",500);
        console.log(error);

    }
}
exports.getAllBookings=async(req,res)=>{
    try{
        const response= await bookingService.getAllBookings(req);
        res.status(200).json({response})

    }
    catch(error){
        console.log(error);
    }
}
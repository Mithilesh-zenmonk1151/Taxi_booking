const { addressService}= require("../service");
exports.addUserAddress=async(req,res)=>{
    try{
        const response= await addressService.addUserAddress(req);
        res.status(201).json({response});

    }
    catch(error){
        console.log("error");

    }
}

exports.updateAddress=async(req,res)=>{
    try{
        const response= await addressService.updateAddress(req);
        res.status(200).json([response])

    }
    catch(error){
        console.log(error);

    }

}
exports.getAddress=async(req,res)=>{
    try{
        const response= await addressService.getAddress(req);
        res.status(200).json({response});

    }
    catch(error){
        console.log(error);
    }
}
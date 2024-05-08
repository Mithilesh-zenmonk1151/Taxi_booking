const {address} = require("../models");
const CustomError = require("../utils/error");
exports.addUserAddress=async(payload)=>{
    try{
        const {userId,street,area,city,state,country,pincode}=payload.body;
        console.log("=============",payload.body);
        // if(!street || !area || !city || !state || !country || !pincode ){
        //     throw new CustomError("All fields are required",499)
        // }
        const adr= await address.create({
            userId:userId,
            street:street,
            area:area,
            city:city,
            state:state,
            country:country,
            pincode:pincode

        })
        return adr;

    }
    catch(error){
        throw error;

    }
}
exports.updateAddress=async(payload)=>{
    try{
        // const {addressId}=payload.params;
        const {addressId,street,area,city,state,country,pincode}=payload.body;
        console.log("===========",payload.body);
        if(!addressId){
            throw new CustomError("adress not found ",404);
        }
        const updatedAddress= await address.update({
            street:street,
            area:area,
            city:city,
            state:state,
            country:country,
            pincode:pincode

        },{where:{uuid:addressId}},{new:true            });
        return updatedAddress;

    }
    catch(error){
        throw error;

    }
}
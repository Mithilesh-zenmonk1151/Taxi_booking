const {address} = require("../models");
// const  = require("../models/user");
const {User}= require("../models");

const CustomError = require("../utils/error");
exports.addUserAddress=async(payload)=>{
    try{
        const {userId,street,area,city,state,country,pincode,phoneNumber}=payload.body;
        console.log("=============",payload.body);
        // if(!street || !area || !city || !state || !country || !pincode ){
        //     throw new CustomError("All fields are required",499)
        // }
        const isuserAddressExists= await address.findOne({where:{userId}});
        if(isuserAddressExists){
            throw new CustomError("address allready exists",409);
        }
        const adress= await address.create({
            userId:userId,
            phoneNumber:phoneNumber,
            street:street,
            area:area,
            city:city,
            state:state,
            country:country,
            pincode:pincode

        })
        console.log("userAddree===")

        return adress;

    }
    catch(error){
        console.log("error============",error)
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

exports.getAddress=async(payload)=>{
    try{
        const addresses= await address.findAll({include: [
            { model: User, as: 'user' }
          ]})

          if(!address){
            throw new CustomError("Address not found",404);
          }

          return addresses;

    }
    catch(error){
        throw error;

    }
}
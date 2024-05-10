const {address} = require("../models");
const {User}= require("../models");



exports.updateUser = async (payload) => {
    try {
      // const { } = payload.params;
      const {userId , firstName,lastName, email,addressId } = payload.body;
      if(!userId){
        throw new CustomError("User not found",404)
      }
      const updateUser = await User.update({
        firstName: firstName,
        lastName:lastName,
        email: email,
        addressId:addressId
      },{ where: { id: userId } });
      return updateUser;
    } catch (error) {
      throw error;
    }
  };
  exports.getUsers=async(payload)=>{
    try{
      const users=await User.findAll({include: [
        { model: address, as: 'address' }
      ]})
      if(!users){
        throw new CustomError("Users not found",404)
      }

      return users;

    }
    catch(error){
      throw error;

    }
  }
  
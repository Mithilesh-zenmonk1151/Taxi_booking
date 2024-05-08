const { where } = require("sequelize");
const { rentedCarInfo } = require("../models");
const { car } = require("../models");
const {BookingInfo} = require("../models")
const CustomError = require("../utils/error");
exports.addrentedCar = async (payload) => {
  try {
    const { userId, carId, bookingId } = payload.body;
    // if (!userId && !carId && !bookingId) {
    //   throw new CustomError("All fields are required", 404);
    // }
    console.log("RentedCar===========");

    const rentedCar = await rentedCarInfo.create({
      userId: userId,
      carId: carId,
      bookingId: bookingId,
    });
    const updatedCarSchema = await car.update(
      { rented: true },
      { where: { uuid: carId } }
    );

    return { updatedCarSchema, rentedCar };
  } catch (error) {
    throw error;
  }
};
exports.returnRentedCar = async (payload) => {
  try {
    const { bookingId, userId, carId, rentedId } = payload.body;
    const carRented = await car.findOne({
      where: { uuid: carId, rented: true },
    });
    if (!carRented) {
      throw new CustomError("Rented car is not found", 404);
    }
    if (!rentedId) {
      throw new CustomError("Rented Car not found", 404);
    }
    const returnCar = await car.update(
      {
        rented: false,
      },
      { where: { uuid: carId } }
    );
    const destroyRented = await rentedCarInfo.destroy({
      where: { uuid: rentedId },
    });
    const destroyBooking= await BookingInfo.destroy({where:{uuid:bookingId}})
    return {returnCar,destroyRented, destroyBooking};
  } catch (error) {
    throw error;
  }
};

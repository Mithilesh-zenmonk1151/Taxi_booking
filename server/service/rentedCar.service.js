const { where } = require("sequelize");
const { rentedCarInfo } = require("../models");
const { car } = require("../models");
const CustomError = require("../utils/error");
exports.addrentedCar = async (payload) => {
  try {
    const { userId, carId, bookingId } = payload.body;
    // if (!userId && !carId && !bookingId) {
    //   throw new CustomError("All fields are required", 404);
    // }

    const updatedCarSchema = await car.update(
      { rented: true },
      { where: { uuid: carId } }
    );
    const rentedCar = await rentedCarInfo.create({
    //   userId: userId,
      carId: carId,
      bookingId: bookingId,
    });

    return { updatedCarSchema, rentedCar };
  } catch (error) {
    throw error;
  }
};

const { car } = require("../models");
const { User } = require("../models");
const CustomError = require("../utils/error");
exports.addCar = async (payload) => {
  try {
    const {
      userId,
      name,
      model,
      launchYear,
      color,
      features,
      price,
      vehicalNumber,
      allowedCity,
      files
    } = payload.body;
    console.log("PAYYLLOAD.BBOODDY", payload.body);

    if (!userId) {
      throw new CustomError("User doesn't exists", 404);
    }

    const isVehicalExists = await car.findOne({
      where: { vehicalNumber: vehicalNumber },
    });
    console.log("============================================");

    if (isVehicalExists) {
      throw new CustomError("Same number of vehical already exists", 409);
    }

    const checkUserRole = await User.findOne({ where: { uuid: userId } });
    const imagePath = files?.map((i) => {
      return i.path;
    });

    const isOwner = await checkUserRole.role;
    let Car;
    if (isOwner === "Owner") {
      console.log("========userId", isOwner);
      try {
        Car = await car.create({
          userId: userId,
          name: name,
          model: model,
          launchYear: launchYear,
          color: color,
          features: features,
          price: price,
          vehicalNumber: vehicalNumber,
          allowedCity: allowedCity,
          
        });
      } catch (error) {
        console.log("eeeeeeeee", error);
      }
    } else {
      throw new CustomError("unAuthorised user", 403);
    }

    return Car;
  } catch (error) {
    console.log("car is not addede it is giving error===");
    throw error;
  }
};
exports.approvedByAdmin = async (payload) => {
  try {
    const { userId, approved, carId } = payload.body;
    console.log("===========", payload.body);
    if (!userId) {
      throw new CustomError("user not found", 404);
    }
    const user = await User.findOne({ where: { uuid: userId } });
    const isAdmin = await user.role;
    let approvedCar;
    if (isAdmin === "Admin") {
      const isResponseExist = await car.findOne({ where: { uuid: carId } });
      if (isResponseExist) {
        console.log("user========", user.role);
        try {
          approvedCar = await car.update(
            {
              approved: approved,
            },
            { where: { uuid: carId } }
          );
        } catch (error) {
          console.log("EEERRRROOORRR++", error);
        }
      }
    }

    return approvedCar;
  } catch (error) {
    throw error;
  }
};

exports.getAllCars = async (payload) => {
  try {
    const cars = await car.findAll();
    if (!car) {
      throw new CustomError("car not found", 404);
    }

    return cars;
  } catch (error) {
    throw error;
  }
};
exports.getApprovedCars = async (payload) => {
  try {
    // const approve= await car.approved;
    const cars = await car.findAll({
      where: { approved: true, rented: false },
    });
    console.log("carsss=======", cars);
    if (!cars) {
      throw new CustomError("cars not found", 404);
    }
    return cars;
  } catch (error) {
    throw error;
  }
};
exports.editCarInfo = async (payload) => {
  try {
  } catch (error) {}
};

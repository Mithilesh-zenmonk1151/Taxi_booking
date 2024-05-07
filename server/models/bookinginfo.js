"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookingInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingInfo.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      userId: {
        type: DataTypes.STRING,
      },
      carId: {
        type: DataTypes.STRING,
      },
      pickUpCity: DataTypes.STRING,
      dropCity: DataTypes.STRING,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      duration: DataTypes.STRING,
      bankHolder: DataTypes.STRING,
      price: DataTypes.INTEGER,
      cardNumber: DataTypes.STRING,
      paymentStatus: DataTypes.BOOLEAN,
      invoiceNumber: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "BookingInfo",
    }
  );
  return BookingInfo;
};

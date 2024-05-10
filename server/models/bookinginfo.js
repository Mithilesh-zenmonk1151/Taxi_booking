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
      this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
      this.belongsTo(models.car, {
        foreignKey: "carId",
        as: "car",
      });
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
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      carId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      pickUpCity: { type: DataTypes.STRING, allowNull: false },
      dropCity: { type: DataTypes.STRING, allowNull: false },
      startDate: { type: DataTypes.STRING, allowNull: false },
      endDate: { type: DataTypes.STRING, allowNull: false },
      duration: { type: DataTypes.STRING, allowNull: false },
      bankHolder: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      cardNumber: { type: DataTypes.STRING, allowNull: false },
      paymentStatus: { type: DataTypes.BOOLEAN, allowNull: false },
      invoiceNumber: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "BookingInfo",
    }
  );
  return BookingInfo;
};

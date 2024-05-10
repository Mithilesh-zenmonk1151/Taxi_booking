"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.car, {
        foreignKey: "id",
        sourceKey: "id",
      });
      this.hasMany(models.BookingInfo, {
        foreignKey: "userId",
        as: "bookings",
      });
      this.hasMany(models.address, {
        foreignKey: 'userId', 
        as: 'address' 
      });
    }
  }
  User.init(
    {
      id: {
        DataTypes:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
      },
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING },
      email: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false },
      addressId:{
        type:DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

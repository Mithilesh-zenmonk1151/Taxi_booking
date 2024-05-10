"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: "userId",
        as:"user",
        onDelete: "CASCADE",
      });
    }
  }
  address.init(
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
      },
      street: {
        type: DataTypes.STRING,
      },
      phoneNumber: {
        type: DataTypes.INTEGER,
      },
      area: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
      },
      pincode: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "address",
    }
  );
  return address;
};

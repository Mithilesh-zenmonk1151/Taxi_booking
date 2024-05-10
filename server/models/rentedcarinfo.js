'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rentedCarInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rentedCarInfo.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    bookingId:{type:DataTypes.INTEGER,
      allowNull:false
    },
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    carId:{type: DataTypes.INTEGER,
      allowNull:false
    },
   
    // bookingId:{type:DataTypes.UUID,
    //   allowNull:false
    // },
  }, {
    sequelize,
    modelName: 'rentedCarInfo',
  });
  return rentedCarInfo;
};
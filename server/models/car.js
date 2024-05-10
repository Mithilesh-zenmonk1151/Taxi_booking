'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasOne(models.carImages)
      this.belongsTo(models.User, {
        foreignKey: 'userId', 
        as: 'user' 
      });
      
    }
  }
  car.init({
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
    userId:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    name: {type:DataTypes.STRING,allowNull:false},
    model: {type:DataTypes.STRING,allowNull:false},
    launchYear: {type:DataTypes.STRING,allowNull:false},
    color: {type:DataTypes.STRING,allowNull:false},
    features: {type:DataTypes.STRING,allowNull:false},
    price: {type:DataTypes.INTEGER,allowNull:false},
    vehicalNumber:{type:DataTypes.STRING,allowNull:false},
    rented:{type:DataTypes.BOOLEAN,
      defaultValue:false,allowNull:false
    },
    // imagePath: {
    //   type:DataTypes.ARRAY(DataTypes.STRING)
    // },
    approved:{type:DataTypes.BOOLEAN,
      defaultValue:false,allowNull:false},
      allowedCity:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull:false,
      }
  }, {
    sequelize,
    modelName: 'car',
  });
  return car;
};
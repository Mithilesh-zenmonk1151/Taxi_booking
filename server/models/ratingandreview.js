'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ratingAndReview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ratingAndReview.init({
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
    carId: {type:DataTypes.INTEGER,allowNull:false},
    userId: {type:DataTypes.INTEGER,allowNull:false},
    rating: {type:DataTypes.INTEGER,allowNull:false},
    review: {type:DataTypes.STRING,allowNull:false},
  }, {
    sequelize,
    modelName: 'ratingAndReview',
  });
  return ratingAndReview;
};
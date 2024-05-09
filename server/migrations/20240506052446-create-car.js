"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,

      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      model: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      vehicalNumber: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,

      },
        
        approved: { type: Sequelize.BOOLEAN, defaultValue: false , allowNull:false},

      launchYear: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      color: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      // imagePath: {
      //   type: Sequelize.ARRAY(Sequelize.STRING),
      // },
      features: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      allowedCity: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,

      },
        rented: { type: Sequelize.BOOLEAN, defaultValue: false ,
        allowNull: false,

        },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cars");
  },
};

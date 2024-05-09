"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("addresses", {
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
      userId:{
        type:Sequelize.STRING,
        allowNull: false,

      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      area: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      state: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      country: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      pincode: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("addresses");
  },
};

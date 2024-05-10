"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("BookingInfos", {
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
      pickUpCity: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      dropCity: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      carId: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      startDate: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      endDate: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      duration: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      bankHolder: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,

      },
      cardNumber: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      paymentStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,

      },
      invoiceNumber: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("BookingInfos");
  },
};

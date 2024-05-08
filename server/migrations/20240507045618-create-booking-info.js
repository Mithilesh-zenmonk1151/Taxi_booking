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
      },
      pickUpCity: {
        type: Sequelize.STRING,
      },
      dropCity: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.STRING,
      },
      carId: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.STRING,
      },
      endDate: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.STRING,
      },

      bankHolder: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      cardNumber: {
        type: Sequelize.STRING,
      },
      paymentStatus: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      invoiceNumber: {
        type: Sequelize.STRING,
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

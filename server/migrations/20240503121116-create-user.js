"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
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
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      lastName: {
        type: Sequelize.STRING,

      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      addressId:{
        type:Sequelize.INTEGER
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
    await queryInterface.dropTable("Users");
  },
};

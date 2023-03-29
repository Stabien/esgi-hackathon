'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'date_of_birth',
      {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
    )
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('users');
  }
};


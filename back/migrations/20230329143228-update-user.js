'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    await queryInterface.addColumn(
      'users',
      'dateOfBirth',
      {
        type: Sequelize.DataTypes.DATE,
      },
      { transaction },
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  },
}

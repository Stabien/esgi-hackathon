'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Impression',
      {
        contentUuid: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
            model: 'content', // Can be both a string representing the table name or a Sequelize model
            key: 'uuid',
          },
        },
        date: {
          type: Sequelize.DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        timestamps: false,
        underscored: true,
      },
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('impression')
  },
}

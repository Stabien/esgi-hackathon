'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'content',
      {
        uuid: {
          type: Sequelize.DataTypes.UUID,
          primaryKey: true,
          defaultValue: Sequelize.DataTypes.UUIDV4,
        },
        type: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        title: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        tags: {
          type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
          allowNull: false,
        },
        thumbnail: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        text: Sequelize.DataTypes.STRING,
        url: Sequelize.DataTypes.STRING,
      },
      {
        underscored: true,
      },
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('content')
  },
}

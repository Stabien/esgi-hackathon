'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('content', 'tags', {
      /* query options */
    })
    await queryInterface.createTable(
      'tag',
      {
        contentUuid: {
          type: Sequelize.DataTypes.UUID,
          defaultValue: Sequelize.DataTypes.UUIDV4,
          references: {
            model: 'content', // Can be both a string representing the table name or a Sequelize model
            key: 'uuid',
          },
        },
        tagName: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        underscored: true,
      },
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
}

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      uuid: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.DataTypes.UUIDV4,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      profession: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      children: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      sport: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      underscored: true,
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      
      email: { type: Sequelize.STRING, unique: true },

      provider: { type: Sequelize.STRING },
      accessToken: { type: Sequelize.STRING },
      refreshToken: { type: Sequelize.STRING }
    });
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};
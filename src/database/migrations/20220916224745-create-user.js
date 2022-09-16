'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
  return queryInterface.createTable('users', { 
    id:{
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoincrement: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    email: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    create_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    update_at: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  });

},

 down (queryInterface, Sequelize) {
 return queryInterface.dropTable('users');
  }
};

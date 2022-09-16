'use strict';

module.exports = {
   up (queryInterface, Sequelize) {
  queryInterface.createTable('users', { 
    id: Sequelize.INTEGER });

},

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

'use strict';

const { QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.addColumn('Produks', 'stok', {
    type: Sequelize.INTEGER
   })
  },

  async down (queryInterface, Sequelize) {
   await QueryInterface.removeColumn('Produks','stok')
  }
};

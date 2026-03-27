'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('tbd_carrito_detalle', 'carrito_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tbb_carritos',
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
    await queryInterface.addColumn('tbd_carrito_detalle', 'producto_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'tbb_productos',
        key: 'id'
      },
      onUpdate: 'NO ACTION',
      onDelete: 'NO ACTION'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('tbd_carrito_detalle', 'producto_id');
    await queryInterface.removeColumn('tbd_carrito_detalle', 'carrito_id');
  }
};

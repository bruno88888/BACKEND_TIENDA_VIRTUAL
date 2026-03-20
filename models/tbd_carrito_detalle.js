'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbd_carrito_detalle extends Model {
    static associate(models) {
      // define association here
    }
  }
  tbd_carrito_detalle.init({
    precio_unitario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbd_carrito_detalle',
  });
  return tbd_carrito_detalle;
};

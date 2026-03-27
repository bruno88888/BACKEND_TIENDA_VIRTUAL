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

  tbd_carrito_detalle.associate = function(models) {
    tbd_carrito_detalle.belongsTo(models.tbb_carritos, {
      foreignKey: 'carrito_id',
      as: 'carrito'
    });
    tbd_carrito_detalle.belongsTo(models.tbb_productos, {
      foreignKey: 'producto_id',
      as: 'producto'
    });
  };

  return tbd_carrito_detalle;
};

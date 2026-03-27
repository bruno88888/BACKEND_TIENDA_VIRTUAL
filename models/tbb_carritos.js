'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_carritos extends Model {
    static associate(models) {
      // define association here
    }
  }
  tbb_carritos.init({
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbb_carritos',
  });

  tbb_carritos.associate = function(models) {
    tbb_carritos.belongsTo(models.tbc_usuarios, {
      foreignKey: 'usuario_id',
      as: 'usuario'
    });
    tbb_carritos.hasMany(models.tbd_carrito_detalle, {
      foreignKey: 'carrito_id',
      as: 'detalles'
    });
  };

  return tbb_carritos;
};

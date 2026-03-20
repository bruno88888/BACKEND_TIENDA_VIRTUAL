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
  return tbb_carritos;
};

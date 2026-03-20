'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbc_categorias extends Model {
    static associate(models) {
      // define association here
    }
  }
  tbc_categorias.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbc_categorias',
  });


tbc_categorias.associate = function(models) {
  // associations can be defined here
  tbc_categorias.hasMany(models.tbb_productos,  
    {
      foreignKey: 'categoria_id',
      as: 'tbb_productos'
    }
  );
}


  return tbc_categorias;
};

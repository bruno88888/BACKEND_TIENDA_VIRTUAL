'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbb_productos extends Model {
    static associate(models) {
      // define association here
    }
  }
  tbb_productos.init({
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    precio: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'tbb_productos',
  });
  
};

participation.associate = function(models) {
  // associations can be defined here
  tbb_productos.belongsTo(models.tbc_categorias,
    {
      foreignKey: 'categoria_id',
      as: 'categoria'
    }
  );
}

return tbb_productos;
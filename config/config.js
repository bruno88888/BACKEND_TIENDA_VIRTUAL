require('dotenv').config(); // Cargar las variables de entorno

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  },
  // Si tienes otros entornos (production, test, etc.), también agrégales configuración
};
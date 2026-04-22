const productoController = require('../controller/controller_producto');
const { authenticateToken, authorizeAdmin } = require('../middlewares/auth');

module.exports = (app) => {
    app.get('/api/productos', productoController.list);
    app.get('/api/productos/:id', productoController.findById);
    app.get('/api/productos/nombre/:nombre', productoController.findByName);
    app.post('/api/productos', authenticateToken, authorizeAdmin, productoController.create);
    app.put('/api/productos/:id', authenticateToken, authorizeAdmin, productoController.update);
    app.delete('/api/productos/:id', authenticateToken, authorizeAdmin, productoController.delete);
};

const categoriaController = require('../controller/controller_categoria');
const { authenticateToken, authorizeAdmin } = require('../middlewares/auth');

module.exports = (app) => {
    app.get('/api/categorias', categoriaController.list);
    app.get('/api/categorias/:id', categoriaController.findById);
    app.get('/api/categorias/nombre/:nombre', categoriaController.findByName);
    app.post('/api/categorias', authenticateToken, authorizeAdmin, categoriaController.create);
    app.put('/api/categorias/:id', authenticateToken, authorizeAdmin, categoriaController.update);
    app.delete('/api/categorias/:id', authenticateToken, authorizeAdmin, categoriaController.delete);
};

const usuarioController = require('../controller/controller_usuario');
const { authenticateToken, authorizeAdmin } = require('../middlewares/auth');

module.exports = (app) => {
    app.get('/api/usuarios', usuarioController.list);
    app.get('/usuarios', usuarioController.list); // Compatibilidad
    app.get('/api/usuarios/:id', usuarioController.findById);
    app.get('/users/:id', usuarioController.findById); // Compatibilidad
    app.get('/api/usuarios/email/:email', usuarioController.findByEmail);
    app.get('/users/email/:email', usuarioController.findByEmail); // Compatibilidad
    app.post('/api/usuarios', usuarioController.create);
    app.post('/usuarios', usuarioController.create); // Compatibilidad
    app.post('/api/users', usuarioController.create); // Compatibilidad
    app.post('/users', usuarioController.create); // Compatibilidad
    app.put('/api/usuarios/:id', authenticateToken, authorizeAdmin, usuarioController.update);
    app.put('/users/:id', authenticateToken, authorizeAdmin, usuarioController.update); // Compatibilidad
    app.delete('/api/usuarios/:id', authenticateToken, authorizeAdmin, usuarioController.delete);
    app.delete('/users/:id', authenticateToken, authorizeAdmin, usuarioController.delete); // Compatibilidad
};

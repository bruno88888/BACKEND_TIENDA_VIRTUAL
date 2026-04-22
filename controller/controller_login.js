const usuario = require('../models').tbc_usuarios;
const jwt = require('jsonwebtoken');

module.exports = {
    login(req, res) {
        const { email, password } = req.body;

        // Validar que se envíen email y password
        if (!email || !password) {
            return res.status(400).send({
                message: 'Email y contraseña son requeridos'
            });
        }

        // Buscar usuario por email
        return usuario.findOne({
            where: { email }
        })
            .then(usuarioItem => {
                if (!usuarioItem) {
                    return res.status(401).send({
                        message: 'Usuario o contraseña incorrectos'
                    });
                }

                // Comparar contraseña (sin encriptación por ahora)
                if (usuarioItem.password !== password) {
                    return res.status(401).send({
                        message: 'Usuario o contraseña incorrectos'
                    });
                }

                // Generar token JWT
                const token = jwt.sign(
                    {
                        id: usuarioItem.id,
                        email: usuarioItem.email,
                        nombre: usuarioItem.nombre,
                        rol: usuarioItem.rol
                    },
                    process.env.JWT_SECRET || 'tu_clave_secreta_aqui',
                    { expiresIn: '24h' }
                );

                return res.status(200).send({
                    message: 'Login exitoso',
                    token: token
                });
            })
            .catch(error => res.status(500).send({
                message: 'Error al procesar login',
                error: error.message
            }));
    }
};

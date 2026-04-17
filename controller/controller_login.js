const jwt = require('jsonwebtoken');
const usuario = require('../models').tbc_usuarios;

const jwtSecret = process.env.JWT_SECRET || 'mi_secreto_jwt';
const jwtExpiresIn = process.env.JWT_EXPIRES_IN || '1h';

module.exports = {
    login(req, res) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).send({ message: 'Email y password son requeridos' });
        }

        return usuario.findOne({ where: { email } })
        .then(usuarioItem => {
            if (!usuarioItem) {
                return res.status(401).send({ message: 'Credenciales inválidas' });
            }

            if (usuarioItem.password !== password) {
                return res.status(401).send({ message: 'Credenciales inválidas' });
            }

            const token = jwt.sign(
                {
                    id: usuarioItem.id,
                    email: usuarioItem.email,
                    rol: usuarioItem.rol,
                },
                jwtSecret,
                { expiresIn: jwtExpiresIn }
            );

            return res.status(200).send({
                token,
                user: {
                    id: usuarioItem.id,
                    nombre: usuarioItem.nombre,
                    email: usuarioItem.email,
                    rol: usuarioItem.rol,
                }
            });
        })
        .catch(error => res.status(500).send({ message: 'Error en el login', error: error.message }));
    }
};

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        return res.status(401).send({ message: 'Token de acceso requerido' });
    }

    jwt.verify(token, process.env.JWT_SECRET || 'tu_clave_secreta_aqui', (err, user) => {
        if (err) {
            return res.status(403).send({ message: 'Token inválido' });
        }
        req.user = user; // Guardar la info del usuario en req.user
        next();
    });
};

const authorizeAdmin = (req, res, next) => {
    if (req.user.rol !== 'admin') {
        return res.status(403).send({ message: 'Acceso denegado. Solo administradores pueden realizar esta acción.' });
    }
    next();
};

module.exports = {
    authenticateToken,
    authorizeAdmin
};
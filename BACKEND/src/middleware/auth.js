const jwt = require('jsonwebtoken');
process.env.SECRETA='tu_secreto'

module.exports = function(req, res, next) {
    // Leer el token del header
    const token = req.header('x-auth-token');

    // Revisar si no hay token
    if (!token) {
        return res.status(401).json({ msg: 'No hay token, permiso no válido' });
    }

    // Validar el token
    try {
        const decoded = jwt.verify(token, process.env.SECRETA);
        req.usuario = decoded.usuario;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token no es válido' });
    }
};
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'tu_clave_secreta'; // Asegúrate de que sea la misma clave que usaste al generar el token

// Middleware para verificar el token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  // Verifica si el header tiene un token
  if (!authHeader) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  // Extraer el token del header
  const token = authHeader.split(' ')[1];

  // Verificar el token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    
    // Añadir los datos del usuario a la solicitud
    req.user = user;
    next();
  });
};

module.exports = verifyToken;

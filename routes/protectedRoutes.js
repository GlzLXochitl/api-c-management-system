// protectedRoutes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('./../middleware/authMiddleware');  // Importa el middleware de autenticación

// Ruta protegida, solo accesible con un token válido
router.get('/dashboard', verifyToken, (req, res) => {
  // Aquí puedes acceder a los datos del usuario autenticado a través de `req.user`
  res.json({
    message: 'Bienvenido al panel de control',
    user: req.user,  // Información del usuario autenticado
  });
});

module.exports = router;

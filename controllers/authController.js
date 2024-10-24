const jwt = require('jsonwebtoken');

// Clave secreta (puedes guardarla en un archivo .env)
const SECRET_KEY = 'tu_clave_secreta';

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Aquí validarías el usuario en tu base de datos
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Aquí verificarías la contraseña (usa bcrypt si la has cifrado)
    const passwordValid = bcrypt.compareSync(password, user.password);
    if (!passwordValid) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    // Si el usuario existe y la contraseña es correcta, generar el token
    const token = jwt.sign(
      { id: user._id, userType: user.user_type_id },
      SECRET_KEY,
      { expiresIn: '1h' } // El token expirará en 1 hora
    );

    // Enviar el token al frontend
    res.json({
      token,
      userType: user.user_type_id
    });

  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

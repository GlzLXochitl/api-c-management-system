const jwt = require('jsonwebtoken'); //*
const SECRET_KEY = 'your_secret_key'; //*
const db = require("../models/db");

//const Users = db.users;

const usersSimulation = [
  { id: 1, email: "user@example.com", password: "password", roles: ["user"] },
  // Agrega más usuarios según sea necesario
];

const userAuth = async (req, res) => {
  const { email, password } = req.body;

  // Verificar las credenciales del usuario
  const user = usersSimulation.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  // Generar el token JWT
  const token = jwt.sign({ id: user.id, roles: user.roles }, SECRET_KEY, {
    expiresIn: "1h",
  });

  // Configurar la cookie HTTP-only
  res.cookie("authToken", token, {
    httpOnly: true, // La cookie no es accesible desde JavaScript
    secure: false, // La cookie solo se enviará a través de HTTPS
    sameSite: "Strict", // La cookie solo se enviará en solicitudes del mismo sitio
  });

  res.json({ token, roles: user.roles });
};

const userLogout = async (req, res) => {};

const checkAuth = async (req, res) => {
  if (!req.cookies) {
    console.error("No se encontraron cookies en la solicitud");
    return res
      .status(400)
      .json({ message: "No se encontraron cookies en la solicitud" });
  }

  if (Object.keys(req.cookies).length === 0) {
    console.error("Las cookies están vacías");
    return res.status(400).json({ message: "Las cookies están vacías" });
  }

  const token = req.cookies.authToken;

  if (!token) {
    console.error("No autenticado");
    return res.status(401).json({ message: "No autenticado" });
  }

  if (!SECRET_KEY) {
    console.error("Error del servidor: clave secreta no definida");
    return res
      .status(500)
      .json({ message: "Error del servidor: clave secreta no definida" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ token, roles: decoded.roles });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      console.error("Token expirado");
      res.status(403).json({ message: "Token expirado" });
    } else if (error.name === "JsonWebTokenError") {
      console.error("Token inválido");
      res.status(403).json({ message: "Token inválido" });
    } else {
      console.error("Error del servidor al verificar el token");
      res
        .status(500)
        .json({ message: "Error del servidor al verificar el token" });
    }
  }
};

module.exports = {
  userAuth,
  userLogout,
  checkAuth,
};

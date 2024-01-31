// app.js

const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

require("dotenv").config();

// Configuración Middleware con el Servidor de Autorización
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});

// Importamos el Router de Usuarios
const usuariosRouter = require("./routes/usuarios");

// Rutas de usuarios con autenticación
app.use("/api/usuarios", autenticacion, usuariosRouter);

// Rutas de libros con autenticación
app.use("/api/libros", autenticacion, require("./routes/libros"));

// Manejador de errores
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;

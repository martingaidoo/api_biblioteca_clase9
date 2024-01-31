// usuarioModel.js

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema(
  {
    nombre: String,
    email: String,
    // Otros campos necesarios para tu modelo de usuario
  },
  { collection: "usuarios" }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;

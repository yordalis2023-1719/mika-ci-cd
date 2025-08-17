const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("¡Hola, CI/CD con GitHub Actions!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor corriendo en http://localhost:${port}`));

module.exports = app;

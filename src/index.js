const express = require('express');
const app = express();

app.get("/", (request, response) => {
  return response.send("inicio");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

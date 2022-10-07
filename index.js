// Configura o arquivo .env
require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

// configurando bodyparser para enviar requisições pelo body no postman/front
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

// Inicia o servidor pela porta selecionada
const PORT = process.env.PORT || 3001;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server started successfully on port ${PORT}`);
  }
});

app.use(express.json());
app.use("/", routes);

// Serve para aplicações de back-end feitas com Node.js para importar o módulo express.
import express from "express";

// Serve para importar a função config do pacote dotenv.
import { config } from "dotenv";

// Serve para 
import routes from "./routes/index.routes.js";

config();

const serverPort = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(routes);

app.listen(serverPort, () => {
  console.log(`⚡ Server started on http://localhost:${serverPort}`);
});
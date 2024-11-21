// Serve para aplicações de back-end feitas com Node.js para importar o módulo express.
import express from "express";

// Serve para importar a função config do pacote dotenv.
import { config } from "dotenv";

// Serve para importar as rotas definidas no arquivo index.routes.js que está localizado no diretório routes.
import routes from "./routes/index.routes.js";

// Serve para executar a função config do módulo dotenv.
config();

// Serve para definir a porta na qual o servidor da aplicação irá escutar.
const serverPort = process.env.PORT || 4000;

// Serve para criar uma instância da aplicação Express.
const app = express();
// Serve para configurar middleware no Express para que ele consiga lidar com requisições HTTP que contenham dados no formato JSON.
app.use(express.json());
// Serve para registrar middleware de rotas na aplicação Express.
app.use(routes);

// Serve para iniciar o servidor da aplicação Express e fazer com que ele comece a escutar na porta especificada por serverPort.
app.listen(serverPort, () => {
  console.log(`⚡ Server started on http://localhost:${serverPort}`);
});
// Importar a funcionalidade Router do framework Express, utilizado no Node.js

import { Router } from "express";

// Lista de importação das rotas do projeto
// Não existe rotas no projeto a serem importadas

//Serve para criar uma nova instância do roteador (Router) do Express, que você pode usar para definir e gerenciar diferentes rotas na sua aplicação.
const routes = Router();

//Serve para definir uma rota GET no módulo de rotas que responde com uma mensagem JSON.
routes.get("/", (req, res) => {
    return res.status(200).json({ message: "Vai Corinthians!" });
});

// Lista de uso das rotas do projeto
// Não existem rotas 

//Serve para exportar a constante routes como o valor padrão do módulo. Isso significa que, ao importar esse módulo em outro arquivo, você estará importando a constante routes.
export default routes;
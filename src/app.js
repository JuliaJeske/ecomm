import express from "express";
import db from "./config/db.config.js";
import routes from "./router/index.js";

const app = express();
app.use(express.json())

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('conexão com o banco feita com sucesso')
})

routes(app);

export default app
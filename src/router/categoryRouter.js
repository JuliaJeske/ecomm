import express from "express";
import CategoryController from "../controllers/categoryController.js";

const router = express.Router();

router
  .get('/categorias', CategoryController.listarCategorias)
  .get('/categorias/:id', CategoryController.listarCategoriaPorId)
  .post('/categorias', CategoryController.cadastrarCategoria)
  .patch('/categorias/:id', CategoryController.ativaStatusCategoria)
  .put('/categorias/:id', CategoryController.atualizarCategoria)
  
  .delete('/categorias/:id', CategoryController.excluirCategoria)

export default router
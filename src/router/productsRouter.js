import express from "express";
import ProductsController from "../controllers/productsController.js";

const router = express.Router();

router
  .get('/produtos', ProductsController.listarProdutos)
  .get('/produtos/:id', ProductsController.listarProdutoPorId)
  .post('/produtos', ProductsController.cadastrarProduto)
  .put('/produtos/:id', ProductsController.atualizarProduto)
  .delete('/produtos/:id', ProductsController.excluirProduto)
export default router
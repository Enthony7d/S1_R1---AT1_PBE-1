import { Router } from "express";
import uploadImage from "../middlewares/uploadImage.middleware.js";
import { uploadDocument } from "../middlewares/uploadDocs.middlewares.js";
import produtoController from "../controllers/produto.controller.js";

const produtoRoutes = Router();

produtoRoutes.post('/produtos/images', uploadImage, produtoController.upload);
produtoRoutes.post('/produtos/docs', uploadDocument, produtoController.upload);

produtoRoutes.post('/produtos', uploadImage, produtoController.criar);
produtoRoutes.get('/produtos', produtoController.listar);
produtoRoutes.put('/produtos/:id', uploadImage, produtoController.atualizar);
produtoRoutes.delete('/produtos/:id', produtoController.deletar);

export default produtoRoutes;
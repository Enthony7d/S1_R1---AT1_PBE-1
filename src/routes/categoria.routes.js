import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";

const router = Router();

router.post('/categorias', categoriaController.criar);
router.get('/categorias', categoriaController.listar);
router.put('/categorias/:id', categoriaController.atualizar);
router.delete('/categorias/:id', categoriaController.deletar);

export default router;
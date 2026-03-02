import { Router } from 'express';
import categoriaController from '../controllers/categoria.controller.js';

const router = Router();

router.post('/', categoriaController.create);
router.get('/', categoriaController.list);
router.delete('/:id', categoriaController.delete);

export default router;
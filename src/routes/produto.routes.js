import { Router } from 'express';
import produtoController from '../controllers/produto.controller.js';
import uploadImage from '../middlewares/uploadImage.middleware.js';

const router = Router();

router.post('/', uploadImage, produtoController.create);
router.get('/', produtoController.list);
router.put('/:id', produtoController.update);
router.delete('/:id', produtoController.delete);

export default router;
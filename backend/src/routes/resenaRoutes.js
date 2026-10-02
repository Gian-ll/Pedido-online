import { Router } from 'express';
import { postResena, getResenas}from '../controllers/resenaController.js';

const router = Router();

router.post('/resenas', postResena);
router.get('/:id_comida', getResenas);

export default router;
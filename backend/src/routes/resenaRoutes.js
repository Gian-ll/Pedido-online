import { Router } from 'express';
import { postResena } from '../controllers/resenaController.js';

const router = Router();

router.post('/resenas', postResena);

export default router;
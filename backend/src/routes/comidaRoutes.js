import { Router } from 'express';
import { getComidas } from '../controllers/comidaController.js';

const router = Router();

router.get('/menu', getComidas); 

export default router;
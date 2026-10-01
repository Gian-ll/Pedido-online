import { Router } from 'express';
import { postPedido } from '../controllers/pedidoController.js';

const router = Router();

// Esta ruta servirá para crear un nuevo pedido
router.post('/', postPedido);

export default router;
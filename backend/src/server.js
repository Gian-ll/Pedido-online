import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import comidaRoutes from './routes/comidaRoutes.js';
import resenaRoutes from './routes/resenaRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';

dotenv.config({ path: './src/config/.env' });

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', comidaRoutes);
app.use('/api/resenas', resenaRoutes);
app.use('/api/pedidos', pedidoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
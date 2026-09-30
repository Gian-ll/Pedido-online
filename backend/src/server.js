import express from 'express';
import cors from 'cors';
import comidaRoutes from './routes/comidaRoutes.js';

const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api', comidaRoutes);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
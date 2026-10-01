import express from 'express';
import cors from 'cors';
import comidaRoutes from './routes/comidaRoutes.js';
import resenaRoutes from './routes/resenaRoutes.js';

const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/api', comidaRoutes);
app.use('/api/resenas', resenaRoutes); 

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
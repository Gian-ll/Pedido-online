import conexion from './backend/src/config/db.js';

async function updatePollo() {
  try {
    const url = 'https://imagenesonline.s3.us-east-2.amazonaws.com/comidas/sanwich+de+pollo.avif';
    await conexion.query('UPDATE comida SET imagen = ? WHERE id_comida = 9', [url]);
    console.log("¡Sándwich de Pollo actualizado con éxito!");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    process.exit();
  }
}

updatePollo();

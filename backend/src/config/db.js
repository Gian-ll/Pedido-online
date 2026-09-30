import mysql from 'mysql2';

const conexion = mysql.createConnection({
  host: '127.0.0.1', 
  user: 'root',      
  password: '',      
  database: 'pedidosonline',
  port: 3306
});

conexion.connect((error) => {
  if (error) {
    console.error('Error al conectar a la BD:', error.message);
    return;
  }
  console.log('Conexión exitosa a pedidosonline');
});

export default conexion.promise();
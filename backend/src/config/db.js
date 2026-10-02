import mysql from 'mysql2';

const conexion = mysql.createPool({
  host: '127.0.0.1', 
  user: 'root',      
  password: '',      
  database: 'pedidosonline',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('conexion establecida');

export default conexion.promise();
import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });

const {
  DB_HOST = '127.0.0.1',
  DB_USER = 'root',
  DB_PASSWORD = '',
  DB_NAME = 'pedidosonline',
  DB_PORT = 3306
} = process.env;

const conexion = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('conexion establecida');

export default conexion.promise();
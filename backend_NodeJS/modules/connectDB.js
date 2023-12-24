const mysql = require('mysql2');
require('dotenv').config();
const { DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT } = process.env;
const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  port: DB_PORT || undefined,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool.promise();

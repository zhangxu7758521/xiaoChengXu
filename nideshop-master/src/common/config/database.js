const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: '192.168.232.128',
  port: '3306',
  user: 'root',
  password: 'Root@123',
  dateStrings: true
};

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost', // Se necessário, substitua pelo seu host, `localhost` é o comum
  user: 'isaac', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: 'isaacclm7991', // Se necessário, substitua pela sua senha para conectar ao banco na sua máquina
  database: 'rest_exercicios'});

module.exports = connection;
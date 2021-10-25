const express = require('express');
const PingPong = require('./controllers/Exercicio1');

const app = express();

app.get('/ping', PingPong); 

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

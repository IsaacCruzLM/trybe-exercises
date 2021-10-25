const express = require('express');
const bodyParser = require('body-parser');
const PingPong = require('./controllers/Exercicio1');
const HelloName = require('./controllers/Exercicio2');

const app = express();
app.use(bodyParser.json());

app.get('/ping', PingPong);
app.post('/hello', HelloName);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

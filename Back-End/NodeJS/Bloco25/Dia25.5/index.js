const express = require('express');
const error = require('./middlewares/error');
const userRoute = require('./controllers/user');

const app = express();

app.use(express.json());

app.use(
    '/user',
    userRoute
);

app.use(error);

app.listen(3000, () => console.log('Running on port 3000'));
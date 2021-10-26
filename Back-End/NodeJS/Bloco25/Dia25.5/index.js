const express = require('express');
const error = require('./middlewares/error');
const userRoute = require('./controllers/user');
const {isValidToken} = require('./middlewares/validations');

const app = express();

app.use(express.json());

app.use(
    '/user',
    userRoute
);

app.get(
    '/btc',
    isValidToken,
    async (_req, res) => {
      const result = await axios.get(ENDPOINTEXTERNALAPI);
  
      res.status(200).json(result.data);
    }
  );

// app.use(error);

app.listen(3000, () => console.log('Running on port 3000'));
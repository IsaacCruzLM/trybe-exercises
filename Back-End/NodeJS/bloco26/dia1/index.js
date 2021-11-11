const express = require('express');
const useRouter = require('./controllers/user');

const app = express();

app.use(express.json());

app.use('/user', useRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
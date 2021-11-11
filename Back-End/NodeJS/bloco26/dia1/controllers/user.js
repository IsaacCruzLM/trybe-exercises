const express = require('express');
const model = require('../model/userModel');

const router = express.Router({ mergeParams: true });

const insertUser = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password ) {
        return res.status(500).send({ message: "Inserir Todos os dados"});
    }

    await model.insert(req.body);

    return res.status(201).send({ message: "user Inserido com sucesso "})
}

router.post('/', insertUser );


module.exports = router;
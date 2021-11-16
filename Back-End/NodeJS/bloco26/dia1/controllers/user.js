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

const getUserById = async (req, res, next) => {
    const { id } = req.params;

    const user = await model.getById(id);

    return res.status(200).send(user)
}

const getUsers = async (req, res, next) => {
    const users = await model.getAll();

    return res.status(200).send(users)
}

router.post('/:id', getUserById );

router.post('/', insertUser );

router.get('/', getUsers );



module.exports = router;
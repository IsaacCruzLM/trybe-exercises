const connection = require('./connection');
const { ObjectId } = require('mongodb');


const insert = async (userObj) => {
    const ret = await connection().then((db) => db.collection('users').insertOne(userObj));

    return ret;
}

const getAll = async () => {
    const AllUsers = await connection().then((db) => db.collection('users').find().toArray());
    return AllUsers;
}

const getById = async (id) => {
    const found = await connection().then((db) => db.collection('users').findOne(ObjectId(id)));
    return found;
}

module.exports = {
    insert,
    getAll,
    getById
};
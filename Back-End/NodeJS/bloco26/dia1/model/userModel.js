const connection = require('./connection');

const insert = async (userObj) => {
    await connection().then((db) => db.collection('users').insertOne(userObj));

    return true;
}

module.exports = {
    insert,
};
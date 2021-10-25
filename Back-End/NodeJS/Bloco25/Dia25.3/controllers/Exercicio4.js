function NameAndAge(req, res) {
    const { name, age } = req.params;

    return res.status(200).send({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
}

module.exports = NameAndAge;
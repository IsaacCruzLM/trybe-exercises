function HelloName(req, res) {
    const { name } = req.body;
    return res.status(200).send({ message: `Hello, ${ name }!` });
}

module.exports = HelloName;
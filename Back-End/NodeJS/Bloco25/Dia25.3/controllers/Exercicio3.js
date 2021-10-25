function Grettings(req, res) {
    const { name, idade } = req.body;

    if (idade < 18) return res.status(401).send({ "message": "Unauthorized" });

    return res.status(200).send({ message: `Hello, ${ name }!` });
}

module.exports = Grettings;
function PingPong(req, res) {
    return res.status(200).send({ message: 'pong' });
}

module.exports = PingPong;
const express = require('express');
const axios = require('axios');
const { isValidToken } = require('../middlewares/validations');
const wrapper = require('../util/wrapper');


const fetchAPI = async (req, res, next) => {
    const response = await axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json");
    res.status(200).json(response.data);
};

const router = express.Router({ mergeParams: true });

router.get(
    '/price', 
    wrapper(isValidToken),
    wrapper(fetchAPI)
);

module.exports = router;
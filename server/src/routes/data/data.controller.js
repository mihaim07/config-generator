const data = require('../../models/data.model');

function getData(req, res) {
    return res.status(200).json(data);
}

module.exports = {
    getData,
}
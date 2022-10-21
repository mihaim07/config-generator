const pathToFile = require('../../models/data.model');


console.log(pathToFile)

function getData(req, res) {
    res.status(200).download(`${pathToFile}/configModified.cfg`);
}

module.exports = {
    getData,
}
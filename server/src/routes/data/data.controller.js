const pathToFile = require('../../models/data.model');


const allFiles = [
    { path : `${pathToFile}/configModified.cfg`, name : 'confff.cfg'},
    { path : `${pathToFile}/config1Modified.cfg`, name : 'confffg.cfg'},
    { path : `${pathToFile}/config2Modified.cfg`, name : 'confffgggg.cfg'}
];

console.log(pathToFile)

function getData(req, res) {
    res.status(200).download(`${pathToFile}/configModified.cfg`, 'confff.cfg');
}

function getData1(req, res) {
    res.status(200).download(`${pathToFile}/config1Modified.cfg`, 'confffg.cfg');
}

function getData2(req, res) {
    res.status(200).download(`${pathToFile}/config2Modified.cfg`, 'confffgggg.cfg');
}

function getDataAll(req, res) {
    // res.status(200).download(`${pathToFile}/config2Modified.cfg`, 'confffgggg.cfg');
    res.zip(allFiles)

}

module.exports = {
    getData,
    getData1,
    getData2,
    getDataAll,
}
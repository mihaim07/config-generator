const express = require('express');
const zip = require('express-zip');

const {
    getData,
    getData1,
    getData2,
    getDataAll,
} = require('./data.controller');

const dataRouter = express.Router();


dataRouter.get('/data', getData);
dataRouter.get('/data1', getData1);
dataRouter.get('/data2', getData2);
dataRouter.get('/dataAll', getDataAll);

module.exports = dataRouter;
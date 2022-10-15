const express = require('express');
const {
    getData,
} = require('./data.controller');

const dataRouter = express.Router();


dataRouter.get('/data', getData);

module.exports = dataRouter;
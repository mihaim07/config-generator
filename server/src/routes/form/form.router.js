const express = require('express');

const {
    postForm,
 } = require('./form.controller');


const formRouter = express.Router();

formRouter.post('/form', postForm);

module.exports = formRouter;

const path = require('path');
const express = require('express');
const cors = require('cors');


const dataRouter = require('./routes/data/data.router');
const formRouter = require('./routes/form/form.router');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(dataRouter);
app.use(formRouter);

module.exports = app;
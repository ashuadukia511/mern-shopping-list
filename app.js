require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());

const db = process.env.DB_URL;
mongoose.connect(db, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true
}).then(() => {
    console.log('Mongoose Connected.......');
}).catch((error) => {
    console.log(error);
});

module.exports = app;
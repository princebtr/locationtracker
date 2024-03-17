const express = require('express');
const cors = require('cors');
const database = require('./database');

const app = express();

app.use(cors());

database
    .then(() => {
        app.listen(8080, () => {
            console.log('Server running at port 8080!')
        })
    })
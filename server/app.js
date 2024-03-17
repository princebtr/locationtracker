const express = require('express');
const cors = require('cors');
const database = require('./database');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

app.use(cors());

async function startServer() {
    try {
        await database;
        app.listen(8080, () => {
            console.log('Server running at port 8080!');
        });
    } catch (error) {
        console.error('Error initializing database:', error);
    }
}

startServer();

app.use('/', usersRoutes);

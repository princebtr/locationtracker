const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

const dbUrl = process.env.DBURL

const database = mongoose.connect(dbUrl)
    .then(() => {
        console.log("Database connected successfully!")
    })
    .catch((err) => {
        console.log({ err })
    })


module.exports = database;
const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://adesinamubarak123:SyIZlL1FzLZSiKhZ@locationtracker.ubqmhvy.mongodb.net/";

const database = mongoose.connect(dbUrl)
    .then(() => {
        console.log("Database connected successfully!")
    })
    .catch((err) => {
        console.log({ err })
    })


module.exports = database;
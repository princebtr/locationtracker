const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());


app.listen(8080, () => {
    console.log('Server running at port 8080!')
})
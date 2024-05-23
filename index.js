const express = require('express');
const app = express();
const cors = require("cors");
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Big Boss is running')
})

app.listen(port, () => {
    console.log(`Big boss is listening on port ${port}`)
})
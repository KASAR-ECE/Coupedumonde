const express = require('express')

const cors = require("cors");











const app = express();
app.use(express.json());



const userregister = require('./routes/userregister');








app.use('/api',userregister);

module.exports = app;

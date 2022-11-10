const express = require('express')

const cors = require("cors");











const app = express();
app.use(express.json());



const signup = require('./routes/signup');
const signin = require('./routes/signin');







app.use('/signup',signup);
app.use('/signin',signin);

module.exports = app;

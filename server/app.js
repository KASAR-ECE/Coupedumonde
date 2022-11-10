const express = require('express');

const cors = require("cors");
const mysql = require('mysql');
const path = require('path');

require('dotenv').config({path: path.resolve(__dirname+'/../.env')});










const app = express();
app.use(express.json());



const signup = require('./routes/signup');
const signin = require('./routes/login');



app.set("base",'/api')



app.use('/signup',signup);
app.use('/signin',signin);

module.exports = app;

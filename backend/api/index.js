const express = require('express');
const serverless = require('serverless-http');
const router = require('./routes/route');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', router); 


module.exports = app;
module.exports.handler = serverless(app);
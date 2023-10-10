require('dotenv').config();
const express = require('express'); //commonjs
const path = require('path');//commonjs
const configViewEngine = require('./config/viewEngie')
const webRoutes = require('./routes/web');

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config template engine
configViewEngine(app);

//khai báo route
app.use('/',webRoutes);

app.listen(port,hostname, () => {
    console.log("This's port : ",port)
})

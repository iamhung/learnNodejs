require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngie')
const webRoutes = require('./routes/index.js');
const swaggerDocs =  require('./swagger.js');
const connection = require('./config/datatbase');

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended:true })) // for form data

// config template engine
configViewEngine(app);

//khai báo route
app.use('/',webRoutes);

connection();

app.listen(port,hostname, () => {
    console.log(`Server is running at http://localhost:${port}`);
    console.log(`Swagger is running at http://localhost:${port}/docs`);
    swaggerDocs(app, port);
})

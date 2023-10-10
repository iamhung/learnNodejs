require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngie')
const webRoutes = require('./routes/web');
// const connection = require('./config/datatbase');

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

// connection.query(
//     'SELECT * FROM Users',
//     function ( err, results, fields) {
//         console.log(' results home ----', results);
//         // console.log(' fields ----', fields);
//     }
// );

app.listen(port,hostname, () => {
    console.log("This's port : ",port)
})

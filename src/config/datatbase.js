const mysql = require("mysql2");
const { Sequelize } = require("sequelize");
require("dotenv").config();

// create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT, // default : 3306
//     database: process.env.DB_NAME
// });

// create the connection Pool to database (Tái sử dụng connection, nhanh hơn)
// const connection = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT, // default : 3306
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// connection.connect((error) => {
//     if (error) {
//       console.error('Error connecting to MySQL database:', error);
//     } else {
//       console.log('Connected to MySQL database!');
//     }
//   });

//   connection.end();

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
// const sequelize = new Sequelize('postgresql://postgres:[Hung2307Ok@]@db.qwtefgrdqioymolldcji.supabase.co:5432/postgres') // Example for postgres

// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize(
  process.env.DB_DATABASE_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
    dialectOptions:
      process.env.DB_SSL === "true"
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {},
    query: {
      raw: true,
    },
    timezone: "+07:00",
    // storage: 'path/to/database.sqlite'
  }
);

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('learnnodejs', 'root', null, {
//   host: 'localhost',
//   dialect: 'mysql',
//   logging: false
// });

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connection;

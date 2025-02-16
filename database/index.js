const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../app/config');

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .catch((error) => console.log(error));

const db = mongoose.connection;

module.exports = db;

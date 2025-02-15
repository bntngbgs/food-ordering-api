const mongoose = require('mongoose');
const { dbHost, dbPass, dbName, dbPort, dbUser } = require('../app/config');

mongoose.connect(
  `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=React-X-Express`
);

const db = mongoose.connection;

module.exports = db;

const {Sequelize}  = require('sequelize');
require('dotenv').config()
const db = new Sequelize({
  
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "nodemarksdb",
  dialect:"postgres"
  
});

module.exports = db ;
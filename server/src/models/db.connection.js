const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

console.log("database de dbConfig :", dbConfig.database);

const pool = mysql.createPool({
  connectionLimit:  10,
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database
});


//open connection
pool.getConnection(error => {
  if (error) throw error;
  console.log("Successfully connected to the database mySQL.");
});

module.exports = pool;

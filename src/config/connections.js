/*
* EXPLANATION
* DB와 연결해주는 DATABASE ACCESS INNER LAYER
*/
//////////////////////////////////////////////////
// * IMPORT ZONE
const mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config();
//////////////////////////////////////////////////
// * MAIN CODE
let connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPW,
    database: process.env.DBNAME,
    port: process.env.DBPORT
});

connection.connect(function(err) {
    if (err) {
      console.error('DATABASE CONNECTION FAILED: ' + err.stack);
      return;
    }
    console.log('CONNECTED TO DATABASE');
});

//////////////////////////////////////////////////
// * EXPORT ZONE

module.exports = connection;
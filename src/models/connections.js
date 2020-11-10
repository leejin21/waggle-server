/*
* EXPLANATION
* DB와 연결해주는 DATABASE ACCESS INNER LAYER
*/
//////////////////////////////////////////////////
// * IMPORT ZONE
const mysql = require('mysql');
//////////////////////////////////////////////////
// * MAIN CODE
let connection = mysql.createConnection({
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPW,
    database: process.env.DBNAME
});

connection.connect();
//////////////////////////////////////////////////
// * EXPORT ZONE

module.exports = connection;
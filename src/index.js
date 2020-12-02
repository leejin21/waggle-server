// ROOT OF CONTROLLER LAYER

//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
var express = require('express');
const mysql = require('mysql');
var dotenv = require('dotenv');
const connection = require('./config/connections.js');

// settings
var app = express();
dotenv.config();
// const connection = mysql.createConnection(dbconfig);

// req.body 사용 위해
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// import routers
var user_route = require('./api/user.router');
var main_route = require('./api/main.router');
var event_route = require('./api/event.router');
var stamp_route = require('./api/stamp.router');

//////////////////////////////////////////////////
//* USE ROUTERS

// DB CONNECT EXAMPLE 
app.get('/', (req, res) => {
    connection.query('SELECT * from User', (error, rows, fields) => {
        if (error) throw error;
        console.log('User info is: ', rows);
        res.send(rows);
    });
});

app.use('/user', user_route);

app.use('/main', main_route);

app.use('/event', event_route);

app.use('/stamp', stamp_route);

//////////////////////////////////////////////////
//* LISTENING ZONE

app.listen(process.env.PORT, ()=>{
    console.log('LISTENING AT URL.%d', process.env.PORT);
})
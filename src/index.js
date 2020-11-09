// ROOT OF CONTROLLER LAYER

//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
var express = require('express');
var dotenv = require('dotenv');

// settings
var app = express();
dotenv.config();

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

app.use('/user', user_route);

app.use('/main', main_route);

app.use('/event', event_route);

app.use('/event', stamp_route);

//////////////////////////////////////////////////
//* LISTENING ZONE

app.listen(process.env.PORT, ()=>{
    console.log('Example app: listening at URL.%d', process.env.PORT);
})
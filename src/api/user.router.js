/*
* EXPLANATION
* user/* 의 꼴을 가지는 end point들에 대한 controller layer.
* get 검증완료
*/
//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
var express = require('express');
var router = express.Router();

//////////////////////////////////////////////////
//* USER ROUTER

// user/register
router.post('/register', function(req, res){
    console.log(req.body)
    res.sendStatus(201);
})

// user/login
router.post('/login', function(req, res){
    res.send({token: "token", info: {name: "눈송", phone_num: "010-0000-0000"}});
})

// user/settings
router.get('/settings', function(req, res){
    res.send({name: "아아", phone_num: "010-0000-0000"});
})

// user/profile
router.get('/profile', function(req, res){
    res.send({  
        name: "id",
        email: "email",
        password: "pw length",
        phone_num: "phon_num",
        birth: "date",
        sex: "F/M"
    });
})

// user/profile
router.put('/profile', function(req, res){
    res.send({  
        name: "id",
        email: "email",
        password: "pw length",
        phone_num: "phon_num",
        birth: "date",
        sex: "F/M"
    });
})


//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = router;
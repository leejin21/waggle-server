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

var jwt = require('jsonwebtoken');

// settings
express.urlencoded({extended: true});

// import my custom modules
var authJWT = require('./auth.mid');

const {users} = require('../models/temp');
const { insertUser } = require('../models/user');
//////////////////////////////////////////////////
//* USER ROUTER
// TODO services로 세부 로직들 옮기기

// user/register
router.post('/register', function(req, res){
    const {status, error} = insertUser(req);
    if (error) {
        res.sendStatus(status).json({error});
    } else {
        res.sendStatus(status);
    }
})

// user/login
router.post('/login', function(req, res){
    // ! 검증 완료(STEP 1)
    console.log('======================================')
    console.log('/user/login POST');
    // Read username and password from request body
    const { email, pw } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.email === email && u.pw === pw });


    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ email: user.email }, authJWT.accessTokenSecret());
        user.accessToken = accessToken;
        console.log(users);

        res.json({
            accessToken
        });
        console.log("++++++++200 SUCCESS++++++++");
    } else {
        res.status(400).json({error: 'email or pw incorrect'});
        console.log("++++++++400 FAIL++++++++");
    }
})

router.post('/logout', authJWT.authHeader, function(req, res){
    const {email, pw} = req.body;
    
    if (req.user) {
        // delete token from db
        req.user.accessToken = null;
        res.status(201).json({status: "success"});
    } else {
        res.status(400).json({error: 'incorrect token or email'})
    }
})

router.get('/token', authJWT.authHeader, function(req, res) {
    // ! Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    console.log('======================================');
    console.log('user/token GET');
    if (req.user) {
        console.log("++++++++200 SUCCESS++++++++");
        res.status(200).json({val: "success"});
    } else {
        console.log("++++++++400 FAIL++++++++");
        res.status(400).json({error: "incorrect token"});
    }
})

// user/settings
router.get('/settings', authJWT.authHeader, function(req, res){
    // ! 검증 완료(STEP 1)
    console.log('======================================');
    console.log("user/settings", " GET");
    if (req.user) {
        res.send({name: req.user.name, phone_num: req.user.phone_num});
    } else {
        res.status(400).json({error: "incorrect token"});
    }  
})


//////////////////////////////////////////////////
// * STEP 2 이후로 할 것
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
module.users = users;
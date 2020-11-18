/*
* EXPLANATION
* main/* 의 꼴을 가지는 end point들에 대한 controller layer.
*/
//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
const { response } = require('express');
var express = require('express');
var router = express.Router();

// import service layer

const {thumbnails} = require('../services/main.services');
const {menus} = require('../services/main.services');
const {hearts} = require('../services/main.services');

//////////////////////////////////////////////////
// * RESTAURANT DATA: TEMPORARY CODE

const rests = [
    // TODO step 2 이후: photo는 rest_id.jpg로.
    {name: "포이푸", heart_filled: true, rest_id: 1, photo: "1.png"},
    {name: "풀사이드", heart_filled: true, rest_id: 2, photo: "2.png"},
    {name: "버거룸", heart_filled: false, rest_id: 3, photo: "3.png"},
    {name: "데일리오아시스", heart_filled: false, rest_id: 4, photo: "4.png"},
];

//////////////////////////////////////////////////

//* MAIN ROUTER

// main/menu
router.post('/menu', function(req, res){
    res.send(menus(req));
});

// main/thumbnails
router.get('/thumbnails', function(req, res){
    // TODO header authentication
    console.log("router, thumbnails");
    res.send(rests);
});

// main/heartchanged
router.post('/heartchanged', function(req, res){
    hearts(req);
    res.sendStatus(200);
});

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = router;
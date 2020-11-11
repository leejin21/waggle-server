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
//* MAIN ROUTER

// main/video
// router.get('/video', function(req, res){
//     res.send({video: "video_get_url_from_object_storage"});
// })

// main/menu
router.post('/menu', function(req, res){
    res.send(menus(req));
});

// main/thumbnails
router.get('/thumbnails', function(req, res){
    console.log("router, thumbnails");
    res.send(thumbnails(req));
});

// main/heartchanged
router.post('/heartchanged', function(req, res){
    hearts(req);
    res.sendStatus(200);
});

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = router;
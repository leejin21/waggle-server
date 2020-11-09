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

//////////////////////////////////////////////////
//* MAIN ROUTER

// main/video
// router.get('/video', function(req, res){
//     res.send({video: "video_get_url_from_object_storage"});
// })

// main/menu
router.post('/menu', function(req, res){
    
    res.send([
        {id: 1, menu_id: 2, name: "비빔밥", photo: 2},
        {id: 2, menu_id: 10, name: "로제떡볶이", photo: 10}
    ]);
})

// main/thumbnails
router.get('/thumbnails', function(req, res){
    res.send(thumbnails(req));
})

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = router;
/*
* EXPLANATION
* main/* 의 꼴을 가지는 end point들에 대한 controller layer.
*/
//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
var express = require('express');
var router = express.Router();

//////////////////////////////////////////////////
//* MAIN ROUTER

// main/video
router.get('/video', function(req, res){
    res.send({video: "video_get_url_from_object_storage"});
})

// main/menu
router.post('/menu', function(req, res){
    res.send([
        {id: 1, menu_id: 2, name: "비빔밥"},
        {id: 2, menu_id: 10, name: "로제떡볶이"}
    ]);
})

// main/thumbnails
router.get('/thumbnails', function(req, res){
    res.send({  
        name: "rest-name",
        heart_filled: "true",
        photo: "object-storage-get-url",
    });
})

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = router;
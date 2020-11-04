/*
* EXPLANATION
* event/stamp/* 의 꼴을 가지는 end point들에 대한 controller layer.
*/
//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
var express = require('express');
var router = express.Router();

//////////////////////////////////////////////////
//* STAMP ROUTER

// event/stamp
router.post('/', function(req, res){
    res.send({  
        stamp: "post stamp"
    });
})

// event/stamp/box
router.get('/box', function(req, res){
    res.send([
        {rest_id: "rest_id", rest_name: "rest_name", stbox_id: "stbox_id", stamp_num: "stamp_num"},
        {rest_id: "rest_id", rest_name: "rest_name", stbox_id: "stbox_id", stamp_num: "stamp_num"}
    ])
})

// event/stamp/detail
router.get('/detail', function(req, res){
    res.send([
        {date: "stamp_date1"},
        {date: "stamp_date2"},
    ])
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
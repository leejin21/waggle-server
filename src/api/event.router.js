/*
* EXPLANATION
* event/* 의 꼴을 가지는 end point들에 대한 controller layer.
* get할 때 python client은 []의 형태를 못 가져오는 듯,,
*/
//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
var express = require('express');
var router = express.Router();

// import 2d route
var stamp_router = require('./event.stamp.router');
//////////////////////////////////////////////////
//* EVENT ROUTER

// event/coupon
router.post('/coupon', function(req, res){
    res.send({coupon: "post coupon"});
})

// event/coupon
router.get('/coupon', function(req, res){
    res.send([
        {coupon_id: 1, rest_name: "마시바시", type: "G"},
        {coupon_id: 2, rest_name: "또와또", type: "S"}
    ]);
})

// event/coupon
router.put('/coupon', function(req, res){
    res.send({  
        used: "true",
        usedDate: "date"
    });
})

// event/coupon/stamp
router.post('/coupon/stamp', function(req, res){
    res.send({  
        stamp: "post stamp-coupon"
    });
})

// event/stamp/*
router.use('/stamp', stamp_router);

// event/review
router.post('/review', function(req, res){
    res.send([
        {menu_id: "menu-id", starPoint: 3},
        {menu_id: "menu-id", starPoint: 3},
    ])
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
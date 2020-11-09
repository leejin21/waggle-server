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


// settings
express.urlencoded({extended: true});

//////////////////////////////////////////////////
//* EVENT ROUTER

// event/coupon
router.post('/coupon', function(req, res){
    res.send([{coupon_id: "id", rest_name: "name", type: "type", content: "content", review_able: "true", useDate: "date"},
    {coupon_id: "id", rest_name: "name", type: "type", content: "content", review_able: "true", useDate: "date"}]);
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
    if (req.params.what === 'viewable'){
        // do something
        console.log("viewable")
    } else {
        // do something
        console.log("viewable")
    }

    res.sendStatus(201)
})

// event/coupon
router.post('/coupon', function(req, res){
    // 다이어그램 참고해서 코드 짜기
    res.sendStatus(201);
})

// event/review
router.post('/review', function(req, res){
    // 다이어그램 참고해서 코드 짜기
    res.sendStatus(201);
})

// event/email
router.post('/email', function(req, res){
    res.sendStatus(201);
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
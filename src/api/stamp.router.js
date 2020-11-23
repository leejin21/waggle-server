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

// stamp/box
router.get('/box', function(req, res){
    res.send([
        { name: 'ABC레스토랑', collected: '2', all: '10'},
        { name: '가나다레스토랑', collected: '1', all: '10'}
    ]);
})

// stamp/detail
// TODO STEP 2 이후
router.get('/detail', function(req, res){
    res.send([
        {date: "stamp_date1"},
        {date: "stamp_date2"},
    ])
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
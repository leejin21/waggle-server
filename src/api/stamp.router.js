//////////////////////////////////////////////////
/*
* EXPLANATION
* event/stamp/* 의 꼴을 가지는 end point들에 대한 controller layer.
*/
//////////////////////////////////////////////////
//* IMPORT ZONE

// import modules
var express = require('express');
var router = express.Router();

// import custom modules
var {authHeader} = require('./auth.mid');

// settings
express.urlencoded({extended: true});

// import temp data
const {coupons, reviews, coupon_menus} = require('../models/temp');

const {rest_data, menu_data} = require('../models/temp');

const {stamps, stampboxes} = require('../models/temp');
//////////////////////////////////////////////////
//* STAMP ROUTER

// stamp/box
router.get('/box', authHeader, function(req, res){
    /*
    * JSON FORM
    data = [
        { name: '포이푸', collected: '13', all: '10' },
        ...
    ]
    TODO 1. collected가 10을 초과할 경우 일단 그대로 초과한 수만큼 주고, 프론트에서 10만 여과해서 보내준다.
    */
    console.log("======================================");
    console.log("stamp/box GET");
    if (req.user) {
        let boxs = stampboxes.filter(b => b.user_id===req.user.user_id);
        console.log(boxs);
        boxs = boxs.map(b => {
            const rest = rest_data.find(r => r.rest_id===b.rest_id);
            return {
                name: rest.name,
                collected: b.stampnum.toString(),
                all: '10',
                rest_id: rest.rest_id,
            };
        });
        console.log(boxs);
        res.send(boxs);
        console.log("++++++++200 SUCCESS++++++++");
    } else {
        res.status(400).json({error: "incorrect token"});
        console.log("++++++++400 FAIL++++++++");
    }
})

// stamp/detail
/* 
TODO
date() 관련 db에 집어넣는 건
https://stackoverflow.com/questions/5129624/convert-js-date-time-to-mysql-datetime
참고
db 연결하고 해야 할 듯.
*/

router.get('/detail', function(req, res){
    /*
    * JSON FORM
        data = [
            {id: 1, date: "20.09.15"},
            {id: 2, date: "20.09.16"},
        ]
        TODO 1. date순으로 정렬해서 가져오기
        TODO 2. db 형태의 date를 20.09.15 형태의 str으로.
    */
    console.log("======================================");
    console.log('stamp/detail GET');
    date1 = new Date();
    date2 = new Date();
    console.log(date1, date2);
    res.send([
        {id: 1, date: "20.09.15"},
        {id: 2, date: "20.09.16"},
        {id: 3, date: "20.09.16"},
        {id: 4, date: "20.09.16"},
        {id: 5, date: "20.09.16"},
        {id: 6, date: "20.09.16"},
        {id: 7, date: "20.09.16"},
        {id: 8, date: "20.09.16"},
        {id: 9, date: "20.09.16"},
        {id: 10, date: "20.09.18"},
    ])
    console.log("++++++++200 SUCCESS++++++++");
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
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
    console.log("======================================");
    console.log("stamp/box GET");
    if (req.user) {
        let boxs = stampboxes.filter(b => b.user_id===req.user.user_id);
        console.log(boxs);
        boxs = boxs.map(b => {
            const rest_name = rest_data.find(r => r.rest_id===b.rest_id).name;
            return {
                name: rest_name,
                collected: b.stampnum.toString(),
                all: '10',
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
// TODO STEP 2 이후
router.get('/detail', function(req, res){
    // 상단의 A메뉴 대응되는 str 보내주기(Rest 테이블에서 sidemenu_id)
    res.send([
        {date: "stamp_date1"},
        {date: "stamp_date2"},
    ])
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
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

// import custom modules
var {authHeader} = require('./auth.mid');

// settings
express.urlencoded({extended: true});

// import temp data
const {coupons} = require('../models/temp');
const {coupon_menus} = require('../models/temp');
const {rest_data} = require('../models/temp');
const {menu_data} = require('../models/temp');
const { menus } = require('../services/main.services');

//////////////////////////////////////////////////
// * DETAIL FUNCTION SECTION

const getContent = (c) => {
    let menu_list = coupon_menus.filter(cm => cm.coupon_id===c.coupon_id);
    menu_list = menu_list.map(m => menu_data.find(d => d.menu_id===m.menu_id).name);
            
    let content = '';
    for (let i=0; i<menu_list.length-1; i++){
        const end = (i===menu_list.length-2)? ' ':', '
        content = content.concat(menu_list[i]+end);
    }
    content = content.concat('/ '+menu_list[menu_list.length-1]);
    return content;
};

//////////////////////////////////////////////////
//* EVENT ROUTER

// event/coupon
router.post('/coupon', authHeader, function(req, res){
    /*
    * JSON FORM
    {
        type: "G",
        rest_id: 1,
        menus: [1, 3]
    }
    */
    console.log('======================================');
    console.log('/event/coupon POST');
    if (req.user) {
        console.log(req.body);
        const coupon_id = coupons.length+1;
        coupons.push({
            // TODO STEP 2 이후: 날짜 및 시간은 date()로
            coupon_id: coupon_id,
            user_id: req.user.user_id,
            rest_id: req.body.rest_id,
            due: "2020.12.04 15:30 PM",
            used: false,
            issuedDate: "2020.11.19 15:30 PM",
            usedDate: null,
            type: req.body.type,
            review_able: true,
            view_remove: false,
        });
        req.body.menus.map(m => {
             coupon_menus.push({coupon_id: coupon_id, menu_id: m});
        });
        res.sendStatus(200);
    } else {
        res.status(400).json({error: "incorrect token"});
    }
})

// event/coupon
router.get('/coupon', authHeader, function(req, res){
    /*
    * JSON FORM
    [
        { 
            coupon_id: 1,
            name: "ABC레스토랑",
            type: "G",
            content: "A, E and A",
            usable: true,
            review_able: true,
            useDate: "2020.08.26 12:53 PM"
        },
        ...
    ]
    */
    console.log('======================================');
    console.log('/event/coupon GET');
    if (req.user) {
        let user_coupons = coupons.filter(c => {
            return (c.user_id===req.user.user_id)&&(c.view_remove===false);
        })

        user_coupons = user_coupons.map(c => {
            const name = rest_data.find(r => r.rest_id===c.rest_id).name;

            const content = getContent(c);

            return {
                coupon_id: c.coupon_id,
                name: name,
                type: c.type,
                content: content,
                usable: !c.used,
                review_able: c.review_able,
                useDate: c.due,
            };
        })
        console.log(coupons);
        console.log(user_coupons);
        res.send(user_coupons);

    } else {
        res.status(400).json({error: "incorrect token"});
    }
})

// event/coupon
router.put('/coupon', authHeader, function(req, res){
    /*
    * JSON FORM
        {
            coupon_id: 1,
            [view_remove: true],
            [used: true],
            [review_able: false]
        }
    */
    console.log('======================================');
    console.log('/event/coupon PUT');
    if (req.user) {
        let change_coupon = coupons.find(c => {
            return (c.coupon_id===req.body.coupon_id);
        });
        console.log(change_coupon);
        console.log(coupons);
        if (req.body.view_remove != undefined) {
            change_coupon.view_remove = req.body.view_remove;
        } else if (req.body.used != undefined) {
            change_coupon.used = req.body.used;
        } else if (req.body.review_able != undefined) {
            change_coupon.review_able = req.body.review_able;
        }
        console.log("changed");
        console.log(change_coupon);
        console.log(coupons);
        console.log("++++++++++200 SUCCESS++++++++++");
        res.sendStatus(200);
    } else {
        console.log("++++++++++400 FAIL++++++++++");
        res.status(400).json({error: "incorrect token"});
    }
})


// event/review
router.post('/review', function(req, res){
    // 다이어그램 참고해서 코드 짜기
    res.sendStatus(201);
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
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
const {coupons, reviews, coupon_menus} = require('../models/temp');

const {rest_data, menu_data} = require('../models/temp');
const { menus } = require('../services/main.services');

const {stamps, stampboxes} = require('../models/temp');

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

    * EXPLANATION
    (1) type === G
    (2) type === S
        rest_id로 스탬프 박스 찾고
        해당 스탬프박스의 날짜순으로 정렬한 가장 오래된 스탬프 10개 삭제
        스탬프박스 isFull === False로 조정(10개 이하일 경우), stampnum -= 10
        rest_id와 묶여 있는 스탬프 사이드로 coupons와 coupon_menus에 push
        
    */
    console.log('======================================');
    console.log('/event/coupon POST');
    if (req.user) {
        if (req.body.type === "G") {
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
        } else {
            // 해당 스탬프 박스의 날짜순으로 정렬한 가장 오래된 스탬프 10개 삭제
            // 스탬프박스 isFull === False로 조정(10개 이하일 경우), stampnum -= 10
            console.log('S');
            console.log(req.body);
            const coupon_id = coupons.length+1;
            coupons.push({
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
            })
            console.log(coupons);
        }
        res.status(200).json({coupon: "posted"});
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
        console.log("++++++++++200 SUCCESS++++++++++");
        res.sendStatus(200);
    } else {
        console.log("++++++++++400 FAIL++++++++++");
        res.status(400).json({error: "incorrect token"});
    }
})


// event/review
router.post('/review', authHeader, function(req, res){
    /*
    * JSON FORM
        data = {
            coupon: {
                coupon_id: 1,
                review_able: false
            },
            review: [
                {
                    menu_id: 10,
                    star_review: 1,
                    salt_review: 1,
                    amount_review: 1,
                    other_review: 1,
                },
        }
        * review 속 변수들은 0부터 시작
        * other_review의 경우 다른 리뷰와는 달리 -1이 가능.
    
    * EXPLANATION
        - SECTION 1 해당 쿠폰의 review_able을 false로,
        - SECTION 2 스탬프 추가해주기
        - SECTION 3 유저의 리뷰 추가해주기
    */
    console.log('======================================');
    console.log('/event/review POST');
    if (req.user) {
        // SECTION 1
        let change_coupon = coupons.find(c => {
            return (c.coupon_id===req.body.coupon.coupon_id);
        });
        change_coupon.review_able = req.body.coupon.review_able;
        
        // SECTION 2
        let box = stampboxes.find(b => {
            return (b.user_id === req.user.user_id)&&(b.rest_id === change_coupon.rest_id);
        });
        if (!box) {
            // stampbox 없으면 생성
            console.log("box 생성");
            let st_len = stampboxes.push({
                rest_id: change_coupon.rest_id,
                user_id: req.user.user_id,
                isFull: false,
                fullCouponId: null,
                stampnum: 0,
                stampbox_id: stampboxes.length+1
            });
            box = stampboxes[st_len-1];
        }
        // stamp 추가
        const today = new Date();
        stamps.push({
            box_id: box.stampbox_id, 
            stamp_id: stamps.length+1, 
            stamp_date: today
        })
        // stamp 추가한 것 stampbox에 반영
        box.stampnum = box.stampnum + 1;
        if (box.stampnum >= 10) {
            // isFull 설정
            console.log("isFull 설정");
            box.isFull = true;
        }
        console.log(stampboxes);
        console.log(stamps);

        // SECTION 3
        req.body.review.forEach(r => {
            reviews.push({
                rest_id: change_coupon.rest_id,
                user_id: req.user.user_id,
                review_id: reviews.length + 1,
                menu_id: r.menu_id,
                post_date: today,
                content: {
                    star_review: r.star_review,
                    salt_review: r.salt_review,
                    amount_review: r.amount_review,
                    other_review: r.other_review
                }
            });
        })
        console.log(reviews);
        console.log("++++++++++200 SUCCESS++++++++++");
        res.status(200).json({success: true});
    } else {
        console.log("++++++++++400 FAIL++++++++++");
        res.status(400).json({error: "incorrect token"});
    }
})

//////////////////////////////////////////////////
//* EXPORT ZONE

module.exports = router;
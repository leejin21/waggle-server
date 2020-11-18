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
const {menus} = require('../services/main.services');
const {hearts} = require('../services/main.services');

//////////////////////////////////////////////////
// * RESTAURANT DATA: TEMPORARY CODE

const rest_data = [
    // TODO step 2 이후: photo는 rest_id.jpg로.
    {name: "포이푸", heart_filled: true, rest_id: 1, photo: "1.png"},
    {name: "풀사이드", heart_filled: true, rest_id: 2, photo: "2.png"},
    {name: "버거룸", heart_filled: false, rest_id: 3, photo: "3.png"},
    {name: "데일리오아시스", heart_filled: false, rest_id: 4, photo: "4.png"},
];


const menu_data = [
    // TODO 사진
    {menu_id: 1, rest_id: 1, name: "스무디볼", price: 12000, type: "main" },
    {menu_id: 2, rest_id: 1, name: "핫도그", price: 8000, type: "main" },
    {menu_id: 3, rest_id: 1, name: "커피", price: 3000, type: "side" },
    {menu_id: 5, rest_id: 2, name: "파스타", price: 15000, type: "main" },
    {menu_id: 6, rest_id: 2, name: "리조또", price: 14000, type: "main" },
    {menu_id: 7, rest_id: 2, name: "사이다", price: 3000, type: "side" },
    {menu_id: 8, rest_id: 3, name: "181룸", price: 9000, type: "main" },
    {menu_id: 9, rest_id: 3, name: "바질버거", price: 10000, type: "main" },
    {menu_id: 10, rest_id: 3, name: "음료", price: 3000, type: "side" },
    {menu_id: 11, rest_id: 4, name: "말차라떼", price: 5000, type: "main" },
    {menu_id: 12, rest_id: 4, name: "말차빙수", price: 10000, type: "main" },
    {menu_id: 13, rest_id: 4, name: "녹차케익", price: 3000, type: "side" },
];
//////////////////////////////////////////////////

//* MAIN ROUTER

// main/menu
router.get('/menu', function(req, res){
    console.log('======================================');
    console.log('/main/menu GET');
    if (req.query.ordered === "false") {
        let menu_list = menu_data.filter(m => {return m.rest_id===parseInt(req.query.rest_id) && m.type==req.query.type});
        if (menu_list.length !== 0) {
            menu_list = menu_list.map((m, i) => {
                let id = i;
                if (req.query.type === "side") id += 100;
                return {id: id, ...m}});
            console.log(menu_list);
            console.log("++++++++200 SUCCESS++++++++");
            res.send(menu_list);
        } else {
            console.log("++++++++400 FAIL++++++++");
            res.status(400).send([]);
        }
    }
});

// main/thumbnails
router.get('/thumbnails', function(req, res){
    // TODO STEP 2 header authentication
    console.log('======================================')
    console.log("router, thumbnails");
    res.send(rest_data);
});

// main/heartchanged
router.post('/heartchanged', function(req, res){
    console.log('======================================')
    console.log('/main/heartchanged POST');
    const rest = rest_data.find(v => {return v.rest_id === req.body.rest_id});
    if (rest) {
        rest.heart_filled = req.body.heart_filled;
        console.log(rest_data);
        console.log("++++++++200 SUCCESS++++++++");
        res.sendStatus(200);
    } else {
        console.log("++++++++400 FAIL++++++++");
        res.sendStatus(400);
    }
});

// main/heartchanged
router.get('/heartchanged', function(req, res){
    console.log('======================================')
    console.log('/main/heartchanged GET');
    console.log(req.query.rest_id, typeof parseInt(req.query.rest_id));
    const rest = rest_data.find(v => {return v.rest_id===parseInt(req.query.rest_id)});
    console.log(rest);
    if (rest){
        res.send({rest_id: rest.rest_id, heart_filled: rest.heart_filled});
        console.log("++++++++200 SUCCESS++++++++");
    } else {
        console.log("++++++++400 FAIL++++++++");
        res.sendStatus(400);
    }
    
})

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = router;
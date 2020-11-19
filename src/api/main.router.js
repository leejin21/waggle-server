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


// import temporary data
const {rest_data} = require('../models/temp');
const {menu_data} = require('../models/temp');

//////////////////////////////////////////////////
//* MAIN ROUTER

// main/menu
router.get('/menu', function(req, res){
    console.log('======================================');
    console.log('/main/menu GET');
    if (req.query.ordered === "false") {
        // basket screen일 경우, 해당 rest의 모든 menu return
        let menu_list = menu_data.filter(m => {return m.rest_id===parseInt(req.query.rest_id) && m.type==req.query.type});
        if (menu_list.length !== 0) {
            menu_list = menu_list.map((m, i) => {
                // basket screen에서 side menu <-> main menu 구별
                let id = i;
                if (req.query.type === "side") id += 100;
                return {id: id, ...m}
            });
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
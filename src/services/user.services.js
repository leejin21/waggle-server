/*
* EXPLANATION
* user/* 의 꼴을 가지는 end point들에 대한 service layer.
*/
//////////////////////////////////////////////////
// * IMPORT ZONE

// import modules
var dotenv = require('dotenv');
const connection = require('../config/connections.js');

// settings
dotenv.config();
//////////////////////////////////////////////////
// * MAIN ALGORITHM

const insertUser = (req) => {
    const {email, pw, phone, sex, birth, name} = req.body;
    
    // TODO email 중복 확인(실존 이메일인 지는 문의사항 관련해서 alert 주기로 하기)
    // TODO 나머지 데이터 validate 확인하기
    
    try {
        // validate 통과하면 users에 insert data 하기
        users.concat({email, pw, phone, sex, birth, name});
        // users 통과하면 200 전달
        console.log(users);
        return {status: 201};
    } catch (e) {
    // 통과 못하면 res.sendStatus(400)하기
        return {status: 400, error: "invalid token"};
    }
}

const thumbnails = (req) => {
    var response = [
    {
        name: "rest-name",
        heart_filled: "true",
        rest_id: "rest_id",
        photo: "rest_id.jpg",
    }, 
    {
        name: "rest-name",
        heart_filled: "true",
        rest_id: "rest_id",
        photo: "rest_id.jpg",
    }];

    return response;
}

const menus = (req) => {
    var response = [
        {
            id: "id",
            menu_id: "menu_id",
            name: "name",
            photo: "menu_id"
        },
        {
            id: "id",
            menu_id: "menu_id",
            name: "name",
            photo: "menu_id"
        },
    ];

    return response;
}


//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = {insertUser}
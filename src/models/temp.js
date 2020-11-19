//////////////////////////////////////////////////
/* 
* EXPLANATION
db 구축 전, temporary data를 모아둔 js 파일입니다.
*/
//////////////////////////////////////////////////
//* USERS DATA: TEMPORARY CODE
const users = [
    {
        user_id: 1,
        email: 'john',
        pw: '0000',
        phone_num: '010-1111-1111',
        sex: 'F',
        birth: new Date(1991,0,1),
        name: '이존',
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmEiLCJpYXQiOjE2MDU2OTEyNTB9.pVBo1dJlGCvGsjeDlLtCBQXhyD_t6WKNsbOoGC5lcFM"
    }, {
        user_id: 2,
        email: 'anna',
        pw: '0000',
        phone_num: '010-2222-2222',
        sex: 'F',
        birth: new Date(1992,1,2),
        name: '이애나',
        accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFubmEiLCJpYXQiOjE2MDU3NjA3ODF9.7I56NTS68I38agKs1YLjTBkxZh8Q6-4COkHQU0dT-xE"
    }
];

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
// * COUPON DATA: TEMPORARY CODE

const coupons = [
    // john
    {coupon_id:1, user_id: 1, rest_id: 1, due: "2020.11.27 22:01 PM", used: false, issuedDate: "2020.11.13 22:01 PM", usedDate: null, type: "G", review_able: true, view_remove: false},
    {coupon_id:2, user_id: 1, rest_id: 2, due: "2020.11.20 18:10 PM", used: true, issuedDate: "2020.11.06 18:10 PM", usedDate: null, type: "G", review_able: true, view_remove: false},
    {coupon_id:3, user_id: 1, rest_id: 3, due: "2020.11.10 12:53 PM", used: true, issuedDate: "2020.10.27 12:53 PM", usedDate: null, type: "G", review_able: false, view_remove: false },
    // anna
    {coupon_id:4, user_id: 2, rest_id: 1, due: "2020.11.27 22:01 PM", used: false, issuedDate: "2020.11.13 22:01 PM", usedDate: null, type: "G", review_able: true, view_remove: false},
    {coupon_id:5, user_id: 2, rest_id: 4, due: "2020.11.25 11:48 PM", used: false, issuedDate: "2020.11.11 11:48 PM", usedDate: null, type: "S", review_able: true, view_remove: false },
    {coupon_id:6, user_id: 2, rest_id: 2, due: "2020.11.20 18:10 PM", used: true, issuedDate: "2020.11.06 18:10 PM", usedDate: null, type: "G", review_able: true, view_remove: false},
    {coupon_id:7, user_id: 2, rest_id: 3, due: "2020.11.10 12:53 PM", used: true, issuedDate: "2020.10.27 12:53 PM", usedDate: null, type: "G", review_able: false, view_remove: false },
    
];

const coupon_menus = [
    {coupon_id: 1, menu_id: 1},
    {coupon_id: 1, menu_id: 3},
    {coupon_id: 2, menu_id: 5},
    {coupon_id: 2, menu_id: 7},
    {coupon_id: 3, menu_id: 8},
    {coupon_id: 3, menu_id: 9},
    {coupon_id: 3, menu_id: 10},
    {coupon_id: 4, menu_id: 1},
    {coupon_id: 4, menu_id: 3},
    {coupon_id: 5, menu_id: 13},
    {coupon_id: 6, menu_id: 5},
    {coupon_id: 6, menu_id: 7},
    {coupon_id: 7, menu_id: 8},
    {coupon_id: 7, menu_id: 9},
    {coupon_id: 7, menu_id: 10},
]

//////////////////////////////////////////////////
// * EXPORT SECTION
exports.users =  users;
exports.rest_data = rest_data;
exports.menu_data = menu_data;
exports.coupons = coupons;
exports.coupon_menus = coupon_menus;
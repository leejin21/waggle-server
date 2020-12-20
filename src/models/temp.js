//////////////////////////////////////////////////
/* 
* EXPLANATION
db 구축 전, temporary data를 모아둔 js 파일입니다.
*/
//////////////////////////////////////////////////
//* USERS DATA: TEMPORARY CODE
const users = [
    /*
    ! token null로 비뀌면 token 부분 없애기
    INSERT INTO User(email, pw, phone, sex, birth_date, name, token)
    VALUES  ('john', '0000', '010-1111-1111', 'male', '1991-01-01', '이준', ''),
            ('anna', '0000', '010-2222-2222', 'female', '1992-02-02', '이애나', '');
    */
    {
        user_id: 1,
        email: 'john',
        pw: '0000',
        phone_num: '010-1111-1111',
        sex: 'F',
        birth: new Date(1991,0,1),
        name: '이존',
    }, {
        user_id: 2,
        email: 'anna',
        pw: '0000',
        phone_num: '010-2222-2222',
        sex: 'F',
        birth: new Date(1992,1,2),
        name: '이애나',
    }
];
//////////////////////////////////////////////////
// * REVIEW DATA: TEMPORARY CODE

const reviews = [
    // rest_id, menu_id, star_review, salt_review, amount_review, other_review, post_date, user_id, review_id
    /*
    CREATE TABLE Review(
    rest_id int,
    menu_id int,
    star_review int,
    salt_review enum('1', '2', '3'),
    amount_review enum('1', '2', '3'),
    other_review enum('1', '2', '3', '4', '0'),
    post_date date,
    user_id int,
    review_id int,

    foreign key (rest_id)
    references Restaurant(rest_id),
    foreign key (menu_id)
    references Menu(menu_id),
    foreign key (user_id)
    references User(id),
    primary key (menu_id, review_id)
    );

    INSERT INTO Review(rest_id, menu_id, star_review, salt_review, amount_review, other_review, post_date, user_id)
    VALUES ('select문', 'select문', 2, 2, 2, 0, '2020-10-20', 'select문');
    */
];
//////////////////////////////////////////////////
// * RESTAURANT DATA: TEMPORARY CODE

const rest_data = [
    /*
    TODO seller_id, seller_email, video_url 없애기
    seller_id int,
    rest_id int auto_increment,
    seller_email varchar(64),
    hits int,
    video_url varchar(255),
    sidemenu_id int,
    rest_name varchar(64),

    INSERT INTO Restaurant(seller_id, seller_email, video_url, hits, sidemenu_id, rest_name)
    VALUES (1, "seller1", "url", 0, 30, "포이푸"),
            (1, "seller1", "url", 0, 31, "풀사이드"),
            (1, "seller1", "url", 0, 32, "버거룸"),
            (1, "seller1", "url", 0, 33, "데일리오아시스");
    */
    // TODO step 2 이후: photo는 rest_id.jpg로.
    {name: "포이푸", heart_filled: true, rest_id: 1, photo: "1.png"},
    {name: "풀사이드", heart_filled: true, rest_id: 2, photo: "2.png"},
    {name: "버거룸", heart_filled: false, rest_id: 3, photo: "3.png"},
    {name: "데일리오아시스", heart_filled: false, rest_id: 4, photo: "4.png"},
];

const prefer_video_data = [
    /*
    user_id int,
    isHearted boolean,
    rest_id int,
    
    foreign key (user_id)
    references User(id),
    foreign key (rest_id)
    references Restaurant(rest_id)

    INSERT INTO PreferVideo(user_id, isHearted, rest_id)
    VALUES  (2, FALSE, 1),
            (2, FALSE, 2),
            (2, FALSE, 3),
            (2, FALSE, 4),
            (1, FALSE, 1),
            (1, FALSE, 2),
            (1, FALSE, 3),
            (1, FALSE, 4);
    
    */
]


const menu_data = [
    // TODO 사진
    /*
    INSERT INTO Menu(rest_id, name, price, type)
    VALUES (1, "스무디볼", 12000, "main"),
     (1, "핫도그", 8000, "main"),
     (1, "커피", 3000, "side"),
     (2, "파스타", 15000, "main"),
     (2, "리조또", 14000, "main"),
     (2, "사이다", 3000, "side"),
     (3, "181룸", 9000, "main"),
     (3, "바질버거", 10000, "main"),
     (3, "음료", 3000, "side"),
     (4, "말차라떼", 5000, "main"),
     (4, "말차빙수", 10000, "main"),
     (4, "녹차케익", 3000, "side");
    */
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
    /*
    ! type이 main이랑 side로 나뉠 때
    INSERT INTO Coupon(coupon_id, user_id, rest_id, due, isUsed, issued_date, type, isReviewable, isRemoved)
    VALUES (1, 1, 1, "2020-11-27 22:01:01", FALSE, "2020-11-13 22:01:01", 'main', TRUE, FALSE),
     (2, 1, 2, "2020-11-20 18:10:03", TRUE, "2020-11-06 18:10:03", 'main', TRUE, FALSE),
     (3, 1, 3, "2020-11-10 12:53:01", TRUE, "2020-10-27 12:53:01", 'main', FALSE, FALSE),
     (4, 2, 1, "2020-11-27 22:01:01", FALSE, "2020-11-13 22:01:01", 'main', TRUE, FALSE),
     (5, 2, 4, "2020-11-25 11:48:05", FALSE, "2020-11-11 11:48:08", 'side', TRUE, FALSE),
     (6, 2, 2, "2020-11-20 18:10:10", TRUE, "2020-11-06 18:10:10", 'main', TRUE, FALSE),
     (7, 2, 3, "2020-11-10 12:52:01", TRUE, "2020-10-27 12:52:01", 'main', FALSE, FALSE);

    ! type이 general이랑 stamp로 나뉠 때
    INSERT INTO Coupon(coupon_id, user_id, rest_id, due, isUsed, issued_date, type, isReviewable, isRemoved)
    VALUES (1, 1, 1, "2020-11-27 22:01:01", FALSE, "2020-11-13 22:01:01", 'general', TRUE, FALSE),
     (2, 1, 2, "2020-11-20 18:10:03", TRUE, "2020-11-06 18:10:03", 'general', TRUE, FALSE),
     (3, 1, 3, "2020-11-10 12:53:01", TRUE, "2020-10-27 12:53:01", 'general', FALSE, FALSE),
     (4, 2, 1, "2020-11-27 22:01:01", FALSE, "2020-11-13 22:01:01", 'general', TRUE, FALSE),
     (5, 2, 4, "2020-11-25 11:48:05", FALSE, "2020-11-11 11:48:08", 'stamp', TRUE, FALSE),
     (6, 2, 2, "2020-11-20 18:10:10", TRUE, "2020-11-06 18:10:10", 'general', TRUE, FALSE),
     (7, 2, 3, "2020-11-10 12:52:01", TRUE, "2020-10-27 12:52:01", 'general', FALSE, FALSE);
    */
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
    /*
    CREATE TABLE CouponMenu(
    coupon_id int,
    menu_id int,
    type enum('side', 'main'),

    INSERT INTO CouponMenu(coupon_id, menu_id, type)
    VALUES  (1, 1, 'main'),
            (1, 3, 'main'),
            (2, 5, 'main'),
            (2, 7, 'main'),
            (3, 8, 'main'),
            (3, 9, 'main'),
            (3, 10, 'main'),
            (4, 1, 'main'),
            (4, 3, 'main'),
            (5, 13, 'main'),
            (6, 5, 'main'),
            (6, 7, 'main'),
            (7, 8, 'main'),
            (7, 9, 'main'),
            (7, 10, 'main');
    */
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
// * STAMP DATA: TEMPORARY CODE

const stamps = [
    // stamp_id, stamp_date, box_id
    /*
    box_id int,
    stamp_date date,
    stamp_id int auto_increment,

    INSERT INTO StampDate(box_id, stamp_date)
    values ('select문', '2020-01-01');
    */
];

const stampboxes = [
    // rest_id, user_id, isFull, fullCouponId, stampnum, stampbox_id

    /*
    rest_id int,
    user_id int,
    isFull boolean,
    fullcoupon_id int,
    stampnum int,
    stampbox_id int auto_increment unique,

    foreign key (rest_id)
    references Restaurant(rest_id),
    foreign key (user_id)
    references User(id),
    primary key(stampbox_id)
    );

    INSERT INTO StampBox(rest_id, user_id, isFull, fullcoupon_id, stampnum)
    values ('select문', 'select문', FALSE, 0, 1)
    */
];
//////////////////////////////////////////////////
// * EXPORT SECTION
exports.users =  users;
exports.rest_data = rest_data;
exports.menu_data = menu_data;
exports.coupons = coupons;
exports.coupon_menus = coupon_menus;
exports.reviews = reviews;
exports.stamps = stamps;
exports.stampboxes = stampboxes;
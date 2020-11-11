/*
* EXPLANATION
* main/* 의 꼴을 가지는 end point들에 대한 service layer.
*/
//////////////////////////////////////////////////
// * IMPORT ZONE


// import modules

//////////////////////////////////////////////////
// * MAIN ALGORITHM

const thumbnails = (req) => {
    // validate header
    
    // get all restaurants
    // connection.query('SELECT * from Users', (error, rows, fields) => {
    //     if (error) throw error;
    //     console.log('User info is: ', rows);
    //     });
    //     // 터미널에서 node index를 해주면 console.log로 sql문의 결과를 출력하게 된다.
    //     //connection.query의 콜백함수의 인자는 에러와 결과값이 들어간다. 세번째 인자는 user의info를 보여주는데 이유는 잘 모르겠다.
    //   connection.end();
    // get all preferred restaurants
    console.log('thumbnails');
    // save sorted restaurants to res
    var res = [
        // 이렇게 array 형태의 GET 아주 잘 받아짐.
    {
        name: "이리오너라",
        heart_filled: "true",
        rest_id: "1",
        photo: {
            name: "1.jpg",
            graphic: "1400"
        },
    }, 
    {
        name: "또와또",
        heart_filled: "true",
        rest_id: "4",
        photo: {
            name: "4.jpg",
            graphic: "1800"
        },
    }];

    return res;
}

const menus = (req) => {
    // 
    var res = [
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

    return res;
}

const hearts = (req) => {
    console.log(req.body);
}

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = {thumbnails, menus, hearts};
/*
* EXPLANATION
* event/* 의 꼴을 가지는 end point들에 대한 service layer.
*/
//////////////////////////////////////////////////
// * IMPORT ZONE


// import modules

//////////////////////////////////////////////////
// * MAIN ALGORITHM

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
module.exports = {thumbnails, menus}
/*
* Explanation
* middleware of authenticating JWT token from header
* 참고: https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
*/
//////////////////////////////////////////////////
// * IMPORT SECTION

var jwt = require('jsonwebtoken');
const {users} = require('../models/temp');
//////////////////////////////////////////////////
// * MAIN SECTION

const authHeader = (req, res, next) => {
    const header = req.headers.authorization;

    if (header) {
        const token = header.split(' ')[1];

        jwt.verify(token, accessTokenSecret(), (err, ui) => {
            console.log("verify");
            if (err) {
                console.log("++++++403 ERROR++++++");
                return res.sendStatus(403);
            }
            console.log(ui);
            console.log(users);
            req.user = users.find(u => {return u.email === ui.email});
            console.log(req.user);
            next();
        });
    } else {
        res.sendStatus(401).send({error: "invalid token"});
    }
};

const accessTokenSecret = () => {
    return "thisisaccesstokensecret";
};

//////////////////////////////////////////////////
// * EXPORT SECTION

exports.authHeader = authHeader;
exports.accessTokenSecret = accessTokenSecret;
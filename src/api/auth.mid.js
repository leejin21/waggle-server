/*
* Explanation
* middleware of authenticating JWT token from header
* 참고: https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
*/
//////////////////////////////////////////////////
// * IMPORT SECTION

var jwt = require('jsonwebtoken');
//////////////////////////////////////////////////
// * MAIN SECTION

const authHeader = (req, res, next) => {
    const header = req.headers.authorization;

    if (header) {
        const token = header.split(' ')[1];

        jwt.verify(token, accessTokenSecret(), (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.useremail = user.email;
            console.log(req.useremail);
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const accessTokenSecret = () => {
    return "thisisaccesstokensecret";
};

//////////////////////////////////////////////////
// * EXPORT SECTION

exports.authHeader = authHeader;
exports.accessTokenSecret = accessTokenSecret;
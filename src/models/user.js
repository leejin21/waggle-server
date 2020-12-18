/*
* EXPLANATION
* user 관련 tables에 대한 query문들
*/
//////////////////////////////////////////////////
// * IMPORT ZONE

//////////////////////////////////////////////////
// * User SQLs

/*
* Users.Model.js
1. insertUser(data): token='빈문자열'
2. getEmailPw(email)
3. updateToken(token)
4. getUser(user): return UserData
5. getNamePhone(user)
6. updateUser(user)
*/


let User = {};

// for debug
User.getAllUser = 'SELECT * FROM User';

User.insertUser = 'sql문';

User.getEmailPw = 'sql문';

User.updateToken = 'UPDATE User SET token=?  WHERE id=?';

User.getUserwEmail = "SELECT * FROM User WHERE email=?";

User.getUserwEmailPw = "SELECT * FROM User WHERE email=? AND pw=?"

User.getNamePhone = 'sql문';

User.updateUser = 'sql문';

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = User;
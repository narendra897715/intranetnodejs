const jwt = require('jsonwebtoken');
const auth_validation = require('./auth_validation');



exports.generateToken = async (data) => {
    var user = {
        _id: 21258
    }
    //console.log(user._id);
    var access = 'auth';
    var token = jwt.sign({ token: data.toString(), access }, process.env.SALT).toString();
    var result = await auth_validation.saveToken(token,data);
    return token;
    //console.log(token);
}


exports.validateToken = async (data) => {
    var flag = false;
    var token;
    try {
        decoded = jwt.verify(data, process.env.SALT);
        var result = await auth_validation.checkForToken(data);
        //console.log(result);
        if (result[0].flag == true) {
            //token = await exports.generateToken(decoded.token);
        } else {
            return flag;
        }
    } catch (e) {
        return flag;
        //return Promise.reject();
    }
    //console.log(decoded);

    return data;
}

// var decoded;
// var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyMTI1OCIsImFjY2VzcyI6ImF1dGgiLCJpYXQiOjE1Mzk3NzgxNjd9.JIrclujCznC4dkedBnrNj56wnWn4eO5UkBFSfuZAIF0';

// console.log(exports.validateToken(token));
//console.log( exports.generateToken(21258));



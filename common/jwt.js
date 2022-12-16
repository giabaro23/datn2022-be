const jwt = require('jsonwebtoken');
const {
    ACCESS_TOKEN_SECRET
} = require('./constants');

exports.generateToken = async (userInfo) => {
    const accessToken = jwt.sign({
        userInfo
    }, ACCESS_TOKEN_SECRET,{
        expiresIn: '24h' 
   });
    return accessToken;
}

exports.verifyToken = async (token) => {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    return decoded;
}
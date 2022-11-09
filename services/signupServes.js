const pg = require('../model');
const moment = require('moment');

exports.register = async (userInfo) => {
    userInfo.createDate = moment().format();
    userInfo.isActive = true;
    let userInformation = new pg.userInformation();
    return await userInformation
        .save(userInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}

exports.getEmail = async (userInfo) => {
    let userInformation = new pg.userInformation();
    return await userInformation
        .getUserInfo(userInfo)
        .then((res) => {
            return res.rows;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}
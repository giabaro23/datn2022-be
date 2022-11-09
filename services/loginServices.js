const pg = require('../model');

exports.getPassword = async (userInfo) => {
    let userInformation = new pg.userInformation();
    return await userInformation
        .getPassword(userInfo)
        .then((res) => {
            return res.rows;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}

exports.getUserInfo = async (userInfo) => {
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
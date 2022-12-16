const pg = require('../model');
const moment = require('moment');

exports.updateProfile = async (userInfo) => {
    userInfo.updateDate = moment().format();
    let userInformation = new pg.userInformation();
    return await userInformation
        .updateProfile(userInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}
exports.editUser = async (userInfo) => {
    userInfo.updateDate = moment().format();
    let userInformation = new pg.userInformation();
    return await userInformation
        .editUser(userInfo)
        .then((res) => {
            return true;
        })
        .catch((error) => {
            console.error(error);
            throw new Error(error);
        })
}

exports.getListUser = async () => {
    let userInformation = new pg.userInformation();
    return await userInformation.getListUser().then((res) => {
        return res.rows;
    }).catch((error) => {
        console.log(error);
        throw new Error(error)
    })
}

exports.getUserInfoById = async(userInfo) =>{
    let userInformation = new pg.userInformation();
    return await userInformation.getUserInfoById(userInfo).then((res)=>{
        return res.rows;
    }).catch((error)=>{
        console.log(error);
        throw new Error(error)
    })
}

exports.lockUser = async (userInfo) => {
    userInfo.isActive = false
    let userInformation = new pg.userInformation();
    return await userInformation.lockUser(userInfo).then((res) => {
        return true;
    }).catch((error) => {
        console.error(error);
        throw new Error(error);
    })
}
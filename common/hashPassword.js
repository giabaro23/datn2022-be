const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hashPassword = async (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

exports.comparePassword = async (password, hashPassword) => {
    const result = bcrypt.compare(password, hashPassword);
    return result;
}
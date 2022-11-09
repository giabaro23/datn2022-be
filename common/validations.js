exports.isEmail = (email) => {
    let emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) {
        return true;
    }

    return false;
}

exports.isNumber = (number) => {
    let regNumber = /^\d+$/;
    if (number !== '' && number.match(regNumber)) {
        return true;
    }
    return false;
}

exports.isPhoneNumber = (number) => {
    if (number !== '' && number.length === 10) {
        return true;
    }
    return false;
}

exports.isPassword = (password) => {
    let regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (password.match(regPassword)) {
        return true;
    }

    return false;
}
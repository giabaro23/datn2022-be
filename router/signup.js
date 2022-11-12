const express = require('express');
const router = express();
const {
    signupServices
} = require('../services/index');
const {
    hashPassword
} = require('../common/hashPassword');
const validation = require('../common/validations')

router.post('/', async (req, res) => {
    try {
        let {
            roleId,
            email,
            password,
            address,
            phoneNumber,
            firstName,
            lastName
        } = req.body;

        // Validate form
        let validMessage = validate({
            roleId,
            email,
            password,
            address,
            phoneNumber,
            firstName,
            lastName
        })
        if (validMessage) {
            return res.status(400).json({
                msg: validMessage
            })
        }

        // Validate duplicate email
        let userInfo = await signupServices.getEmail({
            email
        });
        if (userInfo.length > 0) {
            return res.status(400).json({
                msg: "Email is exist"
            })
        }

        let newPassword;
        await hashPassword(password).then((res) => {
            newPassword = res;
        });

        let result = await signupServices.register({
            roleId,
            email,
            newPassword,
            address,
            phoneNumber,
            firstName,
            lastName
        });

        if (result) {
            return res.status(200).json({
                msg: 'Register success'
            });
        } else {
            return res.status(400).json({
                msg: 'Register failed'
            });
        }
    } catch (error) {
        console.log('[ERROR]: Register failed', error);
    }
})

validate = (userInfo) => {
    let {
        email,
        password,
        phoneNumber,
        firstName,
        lastName
    } = userInfo;

    if (email.trim() === '') {
        return "Email is required!"
    } else if (!validation.isEmail(email)) {
        return "Invalid email!"
    }

    if (password.trim() === '') {
        return "Password is required!"
    } else if (!validation.isPassword(password)) {
        return "Password should contain at least one digit, one lowercase, one uppercase and 8 characters!"
    }

    if (phoneNumber.trim() === '') {
        return "Phone number is required!"
    } else if (!validation.isPhoneNumber(phoneNumber)) {
        return "Phone number should have 10 digit!"
    }

    if (firstName.trim() === '') {
        return "First name is required!"
    }

    if (lastName.trim() === '') {
        return "Last name is required"
    }

}

module.exports = router;
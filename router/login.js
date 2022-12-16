const express = require('express');
const router = express();
const {
    loginServices
} = require('../services/index');
const {
    comparePassword
} = require('../common/hashPassword');
const {
    generateToken
} = require('../common/jwt')

router.post('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        let {
            email,
            password,
        } = req.body;

        // Password with email
        let result = await loginServices.getPassword({
            email
        });

        // Handle check email is exist
        if (result.length === 0) {
            return res.status(400).json({
                msg: "Email is not exist!"
            });
        }

        // Handle compare
        let resultCompare = await comparePassword(password, result[0]?.password);
        if (!resultCompare) {
            return res.status(400).json({
                msg: "Invalid password!"
            });
        }

        // Handle get user info to generate token
        let userInfo = await loginServices.getUserInfo({
            email
        });
        let token = await generateToken({
            roleId: userInfo[0].roleId,
            email: userInfo[0].email
        })
        return res.status(200).json({
            token, userInfo
        })

    } catch (error) {
        console.log('[ERROR]: Login failed', error);
    }
})

module.exports = router;
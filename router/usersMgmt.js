const express = require('express');
const router = express();
const {
    usersServices,
    signupServices
} = require('../services/index');


router.get('/', async (req, res) => {
    try {
        let rs = await usersServices.getListUser()
        return res.status(200).json({
            rs
        })
    } catch (error) {
        console.log('[ERROR]: Get user failed', error);
        throw error;
    }
})

router.put('/', async (req, res) => {
    try {
        let {
            email,
            roleId
        } = req.userInfo;
        let {
            address,
            description,
            phoneNumber,
            firstName,
            lastName,
            avatar
        } = req.body;

        let result = await usersServices.updateProfile({
            address,
            description,
            phoneNumber,
            firstName,
            lastName,
            avatar,
            email
        })

        if (result) {
            return res.status(200).json({
                status: "success",
                msg: "Update profile success"
            })
        }
        return res.status(200).json({
            status: "failed",
            msg: "Update profile failed"
        })

    } catch (error) {
        console.log('[ERROR]: Update profile failed', error);
        throw error;
    }
})

router.put('/lock', async (req, res) => {
    try {
        let {
            email,
            roleId
        } = req.userInfo;
        let emailUser = req.body.email
        if (roleId !== 3) {
            return res.status(403).json({
                msg: 'permission denied'
            })
        }
        // Check email exist
        let userInfo = await signupServices.getEmail({
            email: emailUser
        });

        if (userInfo.length === 0) {
            return res.status(400).json({
                msg: "Invalid email!"
            })
        }

        let rs = await usersServices.lockUser({
            emailUser
        })
        if (rs) {
            return res.status(200).json({
                msg: 'lock success'
            })
        }
        return res.status(400).json({
            msg: 'invalid request'
        })
    } catch (error) {
        console.log('[ERROR]: Update profile failed', error);
        throw error;
    }
})

router.get('/me',async (req,res)=>{
    try {
        let id = req.query.id;
        let rs = await usersServices.getUserInfoById({id})
        return res.status(200).json(rs)
    } catch (error) {
        console.log('[ERROR]: Get user failed', error);
        throw error;
    }
})

module.exports = router;
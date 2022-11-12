const express = require('express');
const router = express();
const {
    v4: uuidv4
} = require('uuid');
const {
    categoryServices
} = require('../services/index');


router.get('/', async (req, res) => {
    try {
        let rs = await categoryServices.getListCategory();
        return res.status(200).json({
            message: 'Success',
            result: rs
        })
    } catch (error) {
        console.log('[ERROR]: Get category failed', error);
        throw error;
    }
})

router.post('/', async (req, res) => {
    try {
        // Handle permission role
        let {
            roleId
        } = req.userInfo;
        if (roleId !== 3) {
            return res.status(401).send('Permission denied')
        }
        // Handle create data
        let {
            nameCategory
        } = req.body;

        let rs = await categoryServices.createCategory({
            id: uuidv4(),
            nameCategory
        });
        return res.status(200).json({
            rs
        })
    } catch (error) {
        console.log('[ERROR]: Create category failed', error);
        throw error;
    }
})


router.post('/subCategory', async (req, res) => {
    try {
        // Handle permission role
        let {
            roleId
        } = req.userInfo;
        if (roleId !== 3) {
            return res.status(401).send('Permission denied')
        }
        // Handle create data
        let {
            categoryId,
            name
        } = req.body;

        let rs = await categoryServices.createCategoryDetail({
            id: uuidv4(),
            categoryId,
            name
        });
        return res.status(200).json({
            rs
        })
    } catch (error) {
        console.log('[ERROR]: Create category detail failed', error);
        throw error;
    }
})

router.get('/getAll', async (req, res) => {
    try {
        let rs = await categoryServices.getListAll();
        return res.status(200).json({
            message: 'Success',
            result: rs
        })
    } catch (error) {
        console.log('[ERROR]: Get all category failed', error);
        throw error;
    }
})

router.put('/', async (req, res) => {
    try {
        // Handle permission role
        let {
            roleId
        } = req.userInfo;
        if (roleId !== 3) {
            return res.status(401).send('Permission denied')
        }
        // Handle update data
        let {
            id
        } = req.query;
        let {
            nameCategory
        } = req.body;

        let rs = await categoryServices.update({
            id,
            nameCategory
        });
        return res.status(200).json({
            message: 'Success',
            result: rs
        })
    } catch (error) {
        console.log('[ERROR]: Update category failed', error);
        throw error;
    }
})

router.put('/subCategory', async (req, res) => {
    try {
        // Handle permission role
        let {
            roleId
        } = req.userInfo;
        if (roleId !== 3) {
            return res.status(401).send('Permission denied')
        }
        // handle update data
        let {
            id
        } = req.query;
        let {
            name,
            categoryId
        } = req.body;

        let rs = await categoryServices.updateDetail({
            id,
            name,
            categoryId
        });
        return res.status(200).json({
            message: 'Success',
            result: rs
        })
    } catch (error) {
        console.log('[ERROR]: Update category detail failed', error);
        throw error;
    }
})


router.delete('/', async (req, res) => {
    try {
        // Handle permission role
        let {
            roleId
        } = req.userInfo;
        if (roleId !== 3) {
            return res.status(401).send('Permission denied')
        }
        // Hadle delete data
        let {
            id
        } = req.query;

        let rs = await categoryServices.delete({
            id
        });
        return res.status(200).json({
            message: 'Success',
            result: rs
        })
    } catch (error) {
        console.log('[ERROR]: Delete category failed', error);
        throw error;
    }
})



module.exports = router;
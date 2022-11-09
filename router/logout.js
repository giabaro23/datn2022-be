const express = require('express');
const router = express();

router.post('/', async (req, res) => {
    try {
        if (Object.keys(req.userInfo).length > 0) {
            req.userInfo = null;
            return res.status(200).json({
                msg: "Logout successfully"
            });
        }
        return res.status(401).send('Missing authentication')

    } catch (error) {
        console.log('[ERROR]: Login failed', error);
    }
})

module.exports = router;
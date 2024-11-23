const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');
//routerobject
const router = express.Router()

//routes
router.post('/sendEmail', sendEmailController);
router.get('/test', async (req, res) => {
    res.send("working");
})
//export
module.exports = router;
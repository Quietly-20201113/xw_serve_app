const express = require('express');
const router = express.Router();
const windyController =  require('../controllers/windyController');

/* GET users listing. */
router.get('/get_windy', windyController.getWindy);
router.get('/getPlan', windyController.getPlan);

module.exports = router;
    
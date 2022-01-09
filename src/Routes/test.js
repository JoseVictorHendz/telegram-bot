const express = require('express');
const router = express.Router();
const controller = require('../Controllers/test');

router.get('/', controller.test);

module.exports = router;
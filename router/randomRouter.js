const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const randomRequestController = require('../controller/randomRequestController');

router.post('/', asyncHandler(randomRequestController.reqRandom));

module.exports = router;
var express = require('express')
var router = express.Router();

const CheckRouting = require('./api/CheckRouting');


router.use('/check', CheckRouting);


module.exports = router;
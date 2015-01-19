'use strict';
const
    siteMap = require('./../modules/api-site-map.json'),
    express = require('express'),
     router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.status(200).json(siteMap);
});

module.exports = router;

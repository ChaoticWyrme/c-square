const express = require('express');
var router = express.Router();
var db = require('../db.js');
var organizations = require('./organization');

router.get('/', (req, res) => {
  response.send('Private api for data');
});

router.use('/organization/', organizations)

module.exports = router;

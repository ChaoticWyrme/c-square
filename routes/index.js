const express = require('express');
var router = express.Router();
var db = require('../db.js');
var organization = require('./organization');
var user = require('./user');
var event = require('./event');

router.get('/', (req, res) => {
  response.send('Private api for data');
});

router.use('/organization/', organization)
router.use('/user/', user)
router.use('/event/', event)

module.exports = router;

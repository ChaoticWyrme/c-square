const express = require('express');
const sqlite = require('sqlite');
var dbPromise = sqlite.open('database.sqlite')
var router = express.Router();
var db = require('../db.js');
(async () => {
  db = db(await dbPromise.catch(err => console.error(err)));
})();

router.get('/', async (req, res, next) => {
  var users = await db.getAllUsers();
  res.send(JSON.stringify(users));
  next();
})

router.get('/:id', async (req, res, next) => {
  try {
    var user = db.getUser(req.params.id);
    res.send(JSON.stringify(user));
    next()
  } catch(err) {
    res.send('false');
    next()
  }
})

router.post('/create', async (req, res, next) => {
  var data = req.body;
  data.plannedEvents = '';
  try {
    var responseData = await db.createUser(data);
    res.send(JSON.stringify({
      result: 'success',
      user: responseData
    }))
    next()
  } catch(err) {
    res.send(JSON.stringify({
      result: 'failure',
      error: err
    }))
    next()
  }
})

router.post('/login', async (req, res, next) => {
  try {
    var user = db.getUserByUsername(req.body.username)
    req.session.user = username;
    res.send(JSON.stringify({
      result: 'success',
      user: user
    }))
    next()
  } catch(err) {
    res.send(JSON.stringify({
      result: 'failure',
      error: err
    }))
  }
})

module.exports = router;
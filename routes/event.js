const express = require('express');
const sqlite = require('sqlite');
var dbPromise = sqlite.open('database.sqlite')
var router = express.Router();
var db = require('../db.js');
(async () => {
  db = db(await dbPromise.catch(err => console.error(err)));
})();

router.get('/', async (req, res, next) => {
  var events = await db.getAllEvents();
  res.send(events);
  next();
})

router.get('/:id', async (req, res, next) => {
  try {
    var event = await db.getEvent(req.params.id);
    res.send(JSON.stringify(event))
    next()
  } catch(err) {
    res.send('false')
    next()
  }
})

router.post('/create', async (req, res, next) => {
  try {
    var data = req.body;
    data.organization = req.cookies;
    var event = db.createEvent(data)
    res.send(JSON.stringify(event));
    next()
  } catch(err) {
    res.send(JSON.stringify({
      result: 'failure'
    }))
    next()
  }
})

module.exports = router;
// ./routes/organization.js
// /data/organization

const express = require('express');
const sqlite = require('sqlite');
var dbPromise = sqlite.open('database.sqlite')
var router = express.Router();
var db = require('../db.js');
(async () => {
  db = db(await dbPromise.catch(err => console.error(err)));
})();

router.get('/:id', async (req, res, next) => {
  // returns json of organization requested by id
  try {
    var org = await db.getOrganization(req.params.id)
    if (!org) {
      res.status(404).send('Invalid organization id')
      next()
    }
    
  } catch(err) {
    next(err)
  }
  res.send(JSON.stringify(org));
  next()
})

router.post('/create', async (req, res, next) => {
  var data = req.body;
  try {
    var id = await db.createOrganization(data)
    res.redirect(303, '/data/organization/' + id);
    next();
  } catch(err) {
    res.redirect(303, '/organization/create#error')
    next(err)
  }
})

module.exports = router;
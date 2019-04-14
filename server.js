// backend
const express = require('express');
const app = express();
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);
const port = 8080;

const bodyParser = require('body-parser')
const dataRouter = require('./routes');

app.use(express.static('build'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(session({
  store: new SQLiteStore,
  secret: 'super secret wow',
  saveUninitialized: false,
  resave: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}))
app.use('/data', dataRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});

// backend
const express = require('express');
const app = express();
const port = 8080;

const bodyParser = require('body-parser')
const dataRouter = require('./routes');

app.use(express.static('build'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/data', dataRouter);

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});

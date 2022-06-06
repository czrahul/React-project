require('dotenv').config();
const data = require('./Agency.postman_collection.json')
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;

// static user details

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.send(data.item[0].item[1].request.body.raw);
})
app.listen(port, () => {
  console.log('Server started on: ' + port);
});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/search', require('./route/youtubeRouter'));
app.get('/', (req, res) => {
  res.send(`Hello ${port}`);
});

app.listen(port, () => {
  console.log(`Running on port ${port}, http://localhost:4000`);
});

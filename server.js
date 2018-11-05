const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const snippets = require('./routes/api/snippets');

const app = express();

// BODY PARSER MIDDLEWARE
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected!'))
  .catch(() => console.log(err));

// Using Routes
app.use('/api/snippets', snippets);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));



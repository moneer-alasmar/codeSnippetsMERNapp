const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SnippetSchema = new Schema({
  title: {
    type: String,
    required: true
  },  
  snippet: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }  
});

module.exports = Snippet = mongoose.model('snippet', SnippetSchema);
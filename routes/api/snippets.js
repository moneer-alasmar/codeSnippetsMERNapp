const express = require('express');
const router = express.Router();

// Snippet model
const Snippet = require('../../models/Snippet');

// @route GET api/snippets
// @desc Get All Snippets
// @access Public
router.get('/', (req, res) => {
  Snippet.find()
    .sort({ date: -1 })
    .then(snippets => res.json(snippets))
});

// @route POST api/snippets
// @desc Create new code snippet
// @access Public
router.post('/', (req, res) => {
  const newSnippet = new Snippet({
    title: req.body.title,
    snippet: req.body.snippet
  });

  newSnippet.save().then(snippet => res.json(snippet));
});

// @route DELETE api/snippets/:id
// @desc Delete snippet
// @access Public
router.delete('/:id', (req, res) => {
  Snippet.findById(req.params.id)
    .then(snippet => snippet.remove()
    .then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});


module.exports = router;
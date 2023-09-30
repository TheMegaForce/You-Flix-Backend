const express = require('express');
const router = express.Router();
const Edit = require('../models/edit'); // Import the Edit model

// Index: Get all edits
router.get('/', async (req, res) => {
  try {
    const edits = await Edit.find();
    res.json(edits);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create: Add a new edit
router.post('/', async (req, res) => {
  try {
    const newEdit = await Edit.create(req.body);
    res.json(newEdit);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Show: Get edit by ID
router.get('/:id', async (req, res) => {
  try {
    const edit = await Edit.findById(req.params.id);
    res.json(edit);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update: Update edit by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedEdit = await Edit.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedEdit);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete: Delete edit by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedEdit = await Edit.findByIdAndDelete(req.params.id);
    res.json(deletedEdit);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

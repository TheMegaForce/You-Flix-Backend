const express = require('express');
const router = express.Router();
const Video = require('../models/video'); // Import the Video model

// Index: Get all videos
router.get('/', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create: Add a new video
router.post('/', async (req, res) => {
  try {
    const newVideo = await Video.create(req.body);
    res.json(newVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Show: Get video by ID
router.get('/:id', async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update: Update video by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedVideo = await Video.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete: Delete video by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    res.json(deletedVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;

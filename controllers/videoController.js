//userPostController.js
const express = require('express');
const router = express.Router();
const Video = require('../models/video'); // Import the Edit model


// Index: Get all videos
router.get('/videos', async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create: Add a new video
router.post('/videos', async (req, res) => {
  try {
    const newVideo = await Video.create(req.body);
    res.json(newVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.put('/videos/:id', async (req, res) => {
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
router.delete('/videos/:id', async (req, res) => {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    res.json(deletedVideo);
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;

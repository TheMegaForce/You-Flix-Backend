// models/video.js
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  // Add more fields as needed, e.g., likes, comments, timestamps, etc.
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;

// models/edit.js
const mongoose = require('../db/connection');

const videoSchema = new mongoose.Schema({
  userId: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
  title:{type: String, required: true},
  description:{type: String, required: true},
  url:{type: String, required: true},
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;

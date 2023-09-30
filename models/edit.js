// models/edit.js
const mongoose = require('mongoose');

const editSchema = new mongoose.Schema({
  userId: { ref: 'User', type: mongoose.Schema.Types.ObjectId },
  videoId: { ref: 'Video', type: mongoose.Schema.Types.ObjectId },
});

const Edit = mongoose.model('Edit', editSchema);

module.exports = Edit;

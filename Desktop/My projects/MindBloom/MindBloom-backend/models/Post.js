const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  username: String,
  text: String,
  timestamp: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  username: String,
  content: String,
  image: String,
  likes: { type: Number, default: 0 },
  likedBy: [String],
  comments: [commentSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);

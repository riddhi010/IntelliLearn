const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Get all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

// Create new post
router.post('/create', async (req, res) => {
  const { username, content, image } = req.body;
  const post = new Post({ username, content, image });
  await post.save();
  res.json(post);
});

// Like post
router.post('/like/:id', async (req, res) => {
  const { userId } = req.body;
  const post = await Post.findById(req.params.id);
  if (!post.likedBy.includes(userId)) {
    post.likes++;
    post.likedBy.push(userId);
    await post.save();
  }
  res.json(post);
});

// Add comment
router.post('/comment/:id', async (req, res) => {
  const { username, text } = req.body;
  const post = await Post.findById(req.params.id);
  post.comments.push({ username, text });
  await post.save();
  res.json(post);
});

module.exports = router;

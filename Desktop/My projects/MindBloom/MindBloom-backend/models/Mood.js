const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  emoji: String,
  label: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Mood', MoodSchema);

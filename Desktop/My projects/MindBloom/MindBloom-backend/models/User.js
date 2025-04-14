const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"]
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

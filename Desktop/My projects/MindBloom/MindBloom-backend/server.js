const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));
app.use(express.json());

// Import routes
const authRoutes = require("./routes/auth");
const moodRoutes = require("./routes/moods"); // ✅ ADD THIS
const chatRoutes = require('./routes/chat');
const postRoutes = require('./routes/posts');

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/moods", moodRoutes); // ✅ AND THIS
app.use('/api/chat', chatRoutes);
app.use('/api/posts', postRoutes);
app.get("/", (req, res) => {
  res.send("MindBloom is running...");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));

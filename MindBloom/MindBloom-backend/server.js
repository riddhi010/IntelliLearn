const express = require("express");
const dotenv = require("dotenv"); 
const mongoose = require("mongoose");
const cors = require("cors");

// ✅ Load environment variables before using them
dotenv.config();

// ✅ Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ Connected to MongoDB Atlas");
}).catch((error) => {
    console.error("❌ MongoDB connection error:", error);
});

const app = express();
app.use(cors());
app.use(express.json()); // Parses JSON requests

// Add authentication routes here
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);  // Maps /api/auth to the auth routes

// Sample API Route
app.get("/", (req, res) => {
    res.send("MindBloom is running...");
});

// ✅ Fix incorrect PORT variable
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));

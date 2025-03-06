const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const greetRoutes = require("./routes/greetRoutes");
require("dotenv").config();

const app = express();

// ✅ Connect to Database
connectDB();

// ✅ Enable CORS for both local and deployed frontend
const allowedOrigins = ["http://localhost:5173", "https://greet-h7n7.vercel.app"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// ✅ Routes
app.use("/api", greetRoutes);

const PORT = process.env.PORT || 5000;

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

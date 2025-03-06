const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
const greetRoutes = require("./routes/greetRoutes");
require("dotenv").config();



const app = express();

// Connect to DB
connectDB();


app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());


// Routes
app.use("/api", greetRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();

const app = express();

// Connect DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello, This is back end" );
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`App is running on port ${PORT}`.yellow.bold)
);

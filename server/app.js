const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected!"))
    .catch(() => console.log("Error occurred while connecting to database!"));
});

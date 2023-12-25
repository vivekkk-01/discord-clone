const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const friendInvitationRoutes = require("./routes/friendInvitation");
const registerSocketServer = require("./socketServer");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/friend-invitation", friendInvitationRoutes);
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected!"))
    .catch(() => console.log("Error occurred while connecting to database!"));
});

registerSocketServer(server);

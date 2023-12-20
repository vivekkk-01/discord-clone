const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening at ${process.env.PORT}`);
});

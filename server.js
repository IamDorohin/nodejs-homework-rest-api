const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const { DEFAULT_URI, DEFAULT_PORT } = process.env;

mongoose
  .connect(DEFAULT_URI)
  .then(() => {
    app.listen(DEFAULT_PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

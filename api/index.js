const express = require("express");
const mongoose = require("mongoose");
const configureMiddlewares = require("./middlewares/Middleware");
require("dotenv").config(); // Load environment variables

const app = express();
const port = 5001;

// applying middleware
configureMiddlewares(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to database");
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch(
    (error = () => {
      console.log(error);
    })
  );

const cors = require("cors");
const express = require("express");
const actorRouter = require("../routes/ActorRoute"); // Adjust path based on your project structure
const userRouter = require("../routes/UserAuth");

// Function to set up middlewares
const configureMiddlewares = (app) => {
  app.use(express.json()); // Parse JSON request bodies
  app.use(
    cors({
      origin: "https://only-heroes-j3kj.vercel.app", //["https://onliheroes.netlify.app", "http://localhost:5173"]
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  ); // Enable CORS
  app.use("/api/actors", actorRouter); // Use actors router
  app.use("/api/auth", userRouter); // Use users router
};

module.exports = configureMiddlewares;

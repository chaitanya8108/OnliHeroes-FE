const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const {body} = require("express-validator")

router.post(
  "/",
  [
    body("name", "Name must be of atleast 5 characters").isLength({ min: 5 }),
    body("email", "Enter a valid Email").isEmail(),
    body("password", "Password must be of atleast 8 characters").isLength({
      min: 8,
    }),
  ],
  userController.addUsers
);
// res.send({ errors: result.array() });

module.exports = router;

const express = require("express");
const router = express.Router();
const actorController = require("../controllers/ActorController");

//route for getting all actors
router.get("/", actorController.getAllActors);

//route for getting actors by id
router.get("/:id", actorController.getActorsById);

//route for adding an actor
router.post("/", actorController.addActors);

//route for deleting an actor by id
router.delete("/:id", actorController.deleteActorsById);

//route for updating an actor by id
router.put("/:id", actorController.updateActor);

//  exporting the router
module.exports = router;

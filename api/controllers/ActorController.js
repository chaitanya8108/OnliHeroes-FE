const Actor = require("../models/Actor");

//controller to get all of the actors
const getAllActors = async (req, res, next) => {
  let actors;
  try {
    actors = await Actor.find();
  } catch (error) {
    console.log(error);
  }

  if (!actors) {
    res.status(404).json({ message: "Actors not found" });
  }
  return res.status(200).json(actors);
};

//controller to get the actors by id
const getActorsById = async (req, res, next) => {
  const id = req.params.id;
  let actors;
  try {
    actors = await Actor.findById(id);
  } catch (error) {
    console.log(error);
  }

  if (!actors) {
    res.status(404).json({ message: "No actors found with this id" });
  }
  return res.status(200).json(actors);
};

//controller to add the Actors
const addActors = async (req, res, next) => {
  const { name, actor, description, rating, characterImage, actorImage } =
    req.body;

  let actors;
  try {
    actors = new Actor({
      name,
      actor,
      description,
      rating,
      characterImage,
      actorImage,
    });
    await actors.save();
  } catch (error) {
    console.log(error);
  }

  if (!actors) {
    res.status(500).json({ message: "Failed to add the Actor" });
  }
  return res.status(201).json(actors);
};

//controller to update the actors by id
const updateActor = async (req, res, next) => {
  const { name, actor, description, rating, characterImage, actorImage } =
    req.body;
  const id = req.params.id;
  let actors;
  try {
    actors = await Actor.findByIdAndUpdate(id, {
      name,
      actor,
      description,
      rating,
      characterImage,
      actorImage,
    });

    await actors.save();
  } catch (error) {
    console.log(error);
  }

  if (!actors) {
    res
      .status(404)
      .json({ message: `no actor found with id : ${id} to update` });
  }
  return res.status(200).json(actors);
};

//controller to delete the actors by id
const deleteActorsById = async (req, res, next) => {
  const id = req.params.id;
  let actors;
  try {
    actors = await Actor.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }

  if (!actors) {
    res
      .status(404)
      .json({ message: `no product found with id : ${id} to delete` });
  }
  return res.status(200).json({ message: "actor deleted successfully" });
};

module.exports.getAllActors = getAllActors;
module.exports.addActors = addActors;
module.exports.getActorsById = getActorsById;
module.exports.updateActor = updateActor;
module.exports.deleteActorsById = deleteActorsById;

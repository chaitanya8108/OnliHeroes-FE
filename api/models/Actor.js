const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ActorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  actor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  characterImage: {
    type: String,
  },
  actorImage: {
    type: String,
  },
});

module.exports = mongoose.model("Actor", ActorSchema);

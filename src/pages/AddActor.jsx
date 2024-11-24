import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import "../styles/AddActor.css";

const API = "http://localhost:5000/actors";

const AddActor = () => {
  const [name, setName] = useState("");
  const [actor, setActor] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [actorImage, setActorImage] = useState("");
  const [characterImage, setCharacterImage] = useState("");
  const [status, setStatus] = useState(""); // To show success or error message

  const sendData = async () => {
    // Convert rating to a number before sending it to the backend
    const numericRating = Number(rating);

    // Check if the rating is a valid number
    if (isNaN(numericRating)) {
      setStatus("Invalid rating value. Please enter a valid number.");
      setTimeout(() => {
        setStatus("");
      }, 2000);

      return;
    }
    try {
      const res = await axios.post(API, {
        name: name,
        actor: actor,
        description: description,
        rating: numericRating,
        characterImage: characterImage,
        actorImage: actorImage,
      });
      setStatus("Actor added successfully", res.status);
      // Message will be displayed for 2 seconds
      setTimeout(() => {
        setStatus("");
      }, 2000);
    } catch (error) {
      setStatus("Failed adding actor", error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendData();
    setName("");
    setActor("");
    setDescription("");
    setRating("");
    setActorImage("");
    setCharacterImage("");
  };

  return (
    <div className="container addContainer">
      <h2 className="addText text-center mb-4 bg-white text-black">Add your OnlyHero</h2>
      {status && (
        <Alert className={status.includes("Error") ? "danger" : "success"}>
          {status}
        </Alert>
      )}
      <form action="/actors" method="post" onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Hero Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="actor"
          placeholder="Actor Name"
          value={actor}
          onChange={(e) => {
            setActor(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating (?/5)"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="actorImage"
          placeholder="Actor Image URL"
          value={actorImage}
          onChange={(e) => {
            setActorImage(e.target.value);
          }}
          required
        />
        <input
          type="text"
          name="characterImage"
          placeholder="Character Image URL"
          value={characterImage}
          onChange={(e) => {
            setCharacterImage(e.target.value);
          }}
          required
        />

        <button type="submit">Add</button>
        {/* <br /> */}
      </form>
    </div>
  );
};

export default AddActor;

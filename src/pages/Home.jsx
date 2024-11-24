import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import HeroCard from "../components/HeroCard";

const API = "https://onliheroes.netlify.app/actors";

const Home = () => {
  const [actors, setActors] = useState([]);

  // Fetch data from the API
  const getData = async () => {
    try {
      const response = await axios.get(API);
      setActors(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (_id) => {
    setActors(actors.filter((actor) => actor._id !== _id));
  };

  useEffect(() => {
    getData();
  }, []);

  return <HeroCard actors={actors} onDelete={handleDelete} />;
};

export default Home;

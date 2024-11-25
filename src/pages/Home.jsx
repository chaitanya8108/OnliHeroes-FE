import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import HeroCard from "../components/HeroCard";

const API = "https://onliheroes.netlify.app/actors";

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  // Fetch data from the API
  const getData = async () => {
    try {
      const response = await axios.get(API).then((response) => {
        console.log(response);
        setHeroes(response.data);
      });
      console.log(response);
      // setHeroes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (_id) => {
    setHeroes(actors.filter((actor) => actor._id !== _id));
  };

  useEffect(() => {
    getData();
  }, []);

  return <HeroCard heroes={heroes} onDelete={handleDelete} />;
};

export default Home;

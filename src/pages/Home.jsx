import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import axios from "axios";
import HeroCard from "../components/HeroCard";

const API = "https://only-heroes-j3kj.vercel.app/api/actors";

const Home = () => {
  const [heroes, setHeroes] = useState([]);

  // Fetch data from the API
  const getData = async () => {
    try {
      const response = await axios.get(API);
      console.log("Response Data:", response.data);
      

      // Ensure it sets an array
      setHeroes(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = (_id) => {
    setHeroes(heroes.filter((hero) => hero._id !== _id));
  };

  useEffect(() => {
    getData();
  }, []);

  return <HeroCard heroes={heroes} onDelete={handleDelete} />;
};

export default Home;

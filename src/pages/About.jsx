import React from "react";
import "../styles/About.css";
import profileImage from "../assets/profileImage.jpg"; // Replace with your image path
import { FaLocationArrow } from "react-icons/fa";

const About = () => {
  return (
    <div className="about">
      <div className="aboutText" style={{userSelect: "none"}}>
        <h1>About Me</h1>
        <p>
          Hi, I'm Chaitanya! A creative front-end developer passionate about
          building visually appealing and user-friendly web applications. With
          expertise in React, Node, Express, MongoDB, MySQL, JavaScript, HTML
          and modern CSS frameworks like Bootstrap, TailwindCSS, shadcn, I bring
          designs to life with precision and flair.
        </p>
        <p>
          I believe in continuous learning and enjoy exploring cutting-edge
          technologies. When I'm not coding, I love to program, playing chess,
          and spending time indoors.
        </p>
        <a href="https://github.com/chaitanya8108" target="_blank">
          <button className="aboutBtn">
            GitHub <FaLocationArrow />
          </button>
        </a>
      </div>
      {/* <div className="imageDiv"> */}
        <img src={profileImage} alt="Chaitanya" id="img"/>
      {/* </div> */}
    </div>
  );
};

export default About;

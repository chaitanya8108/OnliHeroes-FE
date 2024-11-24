import React, { useState } from "react";
import superheroImage from "../assets/hero.png";
import "../styles/Contact.css"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const contactSubmitHandler = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setQuery("");
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center mainContactContainer">
        <div
          className="row shadow-lg rounded-4 overflow-hidden "
          style={{ maxWidth: "900px" }}
        >
          {/* Left Side - Superhero Image */}
          <div
            className="col-12 col-md-6 p-0 leftDiv2"
            style={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              backgroundColor: "#f8f9fa",
            }}
          >
            <img
              src={superheroImage}
              alt="Superhero theme"
              className="img-fluid"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Right Side - Login/Signup Form */}
          <div className="col-12 col-md-6 bg-light p-4 d-flex flex-column justify-content-center">
            <h2 className="text-center mb-4">Contact Me</h2>
            <form action="/users" method="post" onSubmit={contactSubmitHandler}>
              {/* Full Name Field (Only for Signup) */}
              {/* {!isLogin && ( */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control contactContainer"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              {/* )} */}

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control contactContainer"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Query
                </label>
                <input
                  type="box"
                  className="form-control contactContainer"
                  id="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  required
                  placeholder="Enter your query"
                />
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Send
              </button>
            </form>

            {/* Toggle Button */}
            {/* <p className="text-center mt-3">
              {isLogin ? "Not a member yet?" : "Already a member?"}{" "}
              <button
                className="btn btn-link p-0 text-primary"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

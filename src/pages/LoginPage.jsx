import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import superheroImage from "../assets/hero.png"; // Adjust path as needed
import axios from "axios";
import { Alert } from "react-bootstrap";
import "../styles/Login.css";

const userAPI = "http://localhost:5000/api/auth";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  // const [isUserAdded, setIsUserAdded] = useState(false);
  const [status, setStatus] = useState(""); // To show success or error message

  const sendUser = async () => {
    if (!isLogin) {
      try {
        const res = await axios.post(userAPI, {
          name,
          email,
          password,
        });

        // If the user is added successfully
        setStatus("User added successfully!");
        setIsLogin(!isLogin); // Switch back to login mode
        setTimeout(() => setStatus(""), 2000); // Clear the status after 2 seconds
      } catch (err) {
        if (err.response && err.response.data.errors) {
          // Combine all validation error messages into a single string
          const errorMessages = err.response.data.errors
            .map((error) => error.msg)
            .join(", ");
          setStatus(errorMessages); // Set the formatted error messages
        } else if (err.response && err.response.data.error) {
          // For custom errors like duplicate email
          setStatus(err.response.data.error);
        } else {
          // Handle unexpected errors
          setStatus("An unexpected error occurred. Please try again.");
        }

        // Clear the status after 2 seconds
        setTimeout(() => setStatus(""), 2000);
        console.error(err.response ? err.response.data : err.message);
      }
    }
  };

  const userSubmitHandle = (e) => {
    e.preventDefault();
    sendUser();
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center mainLoginContainer"
      style={{overflowY: "hidden"}}>
        <div
          className="row shadow-lg rounded-4 overflow-hidden"
          style={{ maxWidth: "900px" }}
        >
          {/* Left Side - Superhero Image */}
          <div
            className="col-12 col-md-6 p-0 leftDiv"
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
            <h2 className="text-center mb-4">
              {status && (
                <Alert
                  className={status.includes("Error") ? "danger" : "success"}
                >
                  {status}
                </Alert>
              )}
              {isLogin ? "Welcome Back, Hero!" : "Join the League of Heroes"}
            </h2>
            <form action="/users" method="post" onSubmit={userSubmitHandle}>
              {/* Full Name Field (Only for Signup) */}
              {!isLogin && (
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control loginContainer"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              {/* Email Field */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control loginContainer"
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
                  Password
                </label>
                <input
                  type="password"
                  className="form-control loginContainer"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  placeholder="Enter your password"
                />
              </div>

              {/* Confirm Password Field (Only for Signup) */}
              {/* {!isLogin && (
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Re-enter your password"
                />
              </div>
            )} */}

              {/* Submit Button */}
              <button type="submit" className="btn btn-danger w-100">
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>

            {/* Toggle Button */}
            <p className="text-center mt-3">
              {isLogin ? "Not a member yet?" : "Already a member?"}{" "}
              <button
                className="btn btn-link p-0 text-primary"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

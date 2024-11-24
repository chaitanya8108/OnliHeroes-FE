import React, { useState } from "react";
import "../styles/HeroCard.css";
import { FcNext } from "react-icons/fc";
import CardModal from "./CardModal";

const HeroCard = ({ actors, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentActor, setCurrentActor] = useState(null);

  const handleOpenModal = (actor) => {
    setCurrentActor(actor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentActor(null);
  };

  return (
    <div className="cardContainer d-flex flex-wrap justify-content-evenly px-0 mx-0 mt-md-4 mt-sm-5 mb-sm-6">
      {/* Only call map if actors is an array */}
      {Array.isArray(actors) && actors.length > 0 ? (
        actors.map((actor) => (
          <div
            key={actor._id} // Unique identifier (use `id` instead of `name`)
            className="card mb-3 col-xxl-5 mb-md-4 cardCard"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={actor.characterImage}
                  className="charImg img-fluid rounded-start w-100"
                  alt={actor.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-decoration-underline">
                    {actor.name}
                  </h5>
                  <p className="card-text">
                    <strong>Hero: </strong> {actor.actor}
                    <br /> <br />
                    <strong>Rating: </strong> {actor.rating}
                  </p>
                  <p className="card-text">
                    <span
                      className="text-decoration-none"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleOpenModal(actor)}
                    >
                      <small className="text-body-secondary">
                        Click to read more...
                        <FcNext />
                      </small>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No actors available.</p> // Handle the case where no data is available
      )}

      {/* Modal */}
      {currentActor && (
        <CardModal
          actor={currentActor}
          show={showModal}
          closeModal={handleCloseModal}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default HeroCard;

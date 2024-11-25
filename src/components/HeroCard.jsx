import React, { useState } from "react";
import "../styles/HeroCard.css";
import { FcNext } from "react-icons/fc";
import CardModal from "./CardModal";

const HeroCard = ({ heroes, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentHero, setCurrentHero] = useState(null);

  const handleOpenModal = (hero) => {
    setCurrentHero(hero);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentHero(null);
  };

  return (
    <div className="cardContainer d-flex flex-wrap justify-content-evenly px-0 mx-0 mt-md-4 mt-sm-5 mb-sm-6">
      {heroes.map((hero) => (
        <div
          key={hero._id} // Unique identifier (use `id` instead of `name`)
          className="card mb-3 col-xxl-5 mb-md-4 cardCard"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={hero.characterImage}
                className="charImg img-fluid rounded-start w-100"
                alt={hero.name}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title text-decoration-underline">
                  {hero.name}
                </h5>{" "}
                <br />
                <p className="card-text">
                  <strong>Hero: </strong> {hero.actor}
                  <br /> <br />
                  <strong>Rating: </strong> {hero.rating}
                </p>{" "}
                <br /> <br /> <br />
                <p className="card-text">
                  <span
                    className="text-decoration-none"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleOpenModal(hero)}
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
      ))}

      {/* Modal */}
      {currentHero && (
        <CardModal
          hero={currentHero}
          show={showModal}
          closeModal={handleCloseModal}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default HeroCard;

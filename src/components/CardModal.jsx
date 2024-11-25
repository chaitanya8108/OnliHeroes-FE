import React, { useEffect } from "react";
import axios from "axios";

const delAPI = "https://onli-heroes-be.vercel.app/api/auth";

const CardModal = ({ hero, show, closeModal, onDelete }) => {
  const deleteHero = async (_id) => {
    try {
      await axios.delete(`${delAPI}/${_id}`);
      onDelete(_id); // Notify parent of deletion
      closeModal(); // Close modal
    } catch (error) {
      console.error("Error deleting hero:", error);
    }
  };

  useEffect(() => {
    const modalElement = document.querySelector(".modal");
    let modal;

    if (modalElement) {
      modal = new window.bootstrap.Modal(modalElement);

      if (show) {
        modal.show();
      } else {
        modal.hide();
      }
    }

    return () => {
      if (modal) {
        modal.hide();
        const backdrop = document.querySelector(".modal-backdrop");
        if (backdrop) {
          backdrop.remove();
        }
      }
    };
  }, [show]);

  return (
    <div className="modal fade" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{hero.name}</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <img src={hero.actorImage} alt={hero.name} className="w-100" />
            <strong>Description</strong>
            <p>{hero.description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => deleteHero(hero.id)}
            >
              Delete
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={closeModal}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;

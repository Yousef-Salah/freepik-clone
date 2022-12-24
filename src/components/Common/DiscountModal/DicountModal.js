import { useState } from "react";
import { Link } from "react-router-dom";
import "./discount-modal.css";

const DiscountModal = () => {
  // search for abolute relative path

  const [modalState, setModalState] = useState("");

  const modalStateHandler = () => {
    setModalState("d-none");
  };

  return (
    <div className="position-relative" id="discount-modal">
      <div className={modalState + " p-2"}>
        <div className="container text-light">
          <div className="row">
            <div className="col-7">
              <img
                className="d-inline-block"
                id="freepik-icon"
                src={require("../../../assets/images/icons/freepik-white-icon.png")}
                alt="freepik icon"
              />
              <span>freepik</span>
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <span className="d-inline-block">20%</span> on all Premium plans
            </div>
          </div>
          <div className="row">
            <div className="col-7">
              <p>
                Finding the right visual is easy with <span>Premium.</span> Now
                with Flaticon exclusive content.
              </p>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-7 offset-3 pb-3">
              <Link to="/pricing" className="btn btn-ligth bg-light">
                Apply discount
              </Link>
            </div>
          </div>
        </div>

        <button
          className="position-absolute rounded"
          onClick={modalStateHandler}
        >
          X
        </button>

        <div id="righ-side-image">
          <img
            src={require("../../../assets/images/DiscountModal/DiscountModal.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;

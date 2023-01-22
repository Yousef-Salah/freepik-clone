import React from "react";
import "./wepik.css";
const Wepik = (props) => {
  return (
    <div className="wepik-cont" id="wepik">
      <div className="col-6 wepik">
        <img className="wepik-logo " src={props.logoUrl} alt="wepik-logo" />
        <h5 className="wepik-header">{props.headerText}</h5>
        <h6 className="wepik-paragraph">{props.paragraphText}</h6>
        <button type="button" className="btn btn-primary btn-lg wepik-btn">
          {props.buttonText}
        </button>
      </div>

      <div className="col-6 d-lg-block wepik-photo">
        <img src={props.photoUrl} alt="wepik-pho" />
      </div>
    </div>
  );
};

export default Wepik;


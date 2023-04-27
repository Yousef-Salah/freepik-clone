import React from "react";
import "./card3d.css";
const Card3D = (props) => {
  return (
    <>
      {props ? (
        <div className="card-3d-wrapper">
          <img src={props.image} className="photo-3d" />
          <div className="desc-3d">
            <img src={props.avatar} className="avatar1" />
            <p className="owner-3d">freepik</p>
            <p className="name-3d">{props.name}</p>
            <img
              src="https://i.pinimg.com/originals/5c/af/0e/5caf0e96302ba07a3fcb86fcdf0f5129.jpg"
              className="pinterest"
            />
          </div>
        </div>
      ) : (
        <h1>
          <b>Card3D</b> missing data
        </h1>
      )}
    </>
  );
};

export default Card3D;

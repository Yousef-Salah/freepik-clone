import React from "react";
const FontCard = (props) => {
  return (
    <div className="font-card">
      <div className="row g-0 cardrow">
        <div className="col-md-2 font-image col-sm-2 col-2">
          <img
            src={props.img}
            className=" rounded-start img-card fontimage"
            id="fontimage"
          />
        </div>
        <div className="col-md-10 col-sm-10 col-10" id="font-card-info">
          <div className="card-body">
            <div className={`d-flex name-count ${props.margin}`}>
              <p className="creator">{props.fontName}</p>
              <p className="styles-count">{props.stylesCount} Styles</p>
            </div>
            <p
              style={{ fontFamily: `${props.font}` }}
              className={`card-font-title ${props.fontSize}`}
            >
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FontCard;

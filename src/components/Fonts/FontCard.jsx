import React from 'react'

const FontCard = ({
  img,
  margin,
  fontName,
  stylesCount,
  fontSize,
  title,
  font,
}) => (
  <div className="font-card">
    <div className="row g-0 cardrow">
      <div className="col-md-2 font-image col-sm-2 col-2">
        <img
          src={img}
          className=" rounded-start img-card fontimage"
          id="fontimage"
          alt={fontName}
        />
      </div>
      <div className="col-md-10 col-sm-10 col-10" id="font-card-info">
        <div className="card-body card-body-fonts">
          <div className={`d-flex name-count ${margin}`}>
            <p className="creator">{fontName}</p>
            <p className="styles-count">
              {stylesCount}
              Styles
            </p>
          </div>
          <p
            style={{ fontFamily: `${font}` }}
            className={`card-font-title ${fontSize}`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  </div>
)
export default FontCard

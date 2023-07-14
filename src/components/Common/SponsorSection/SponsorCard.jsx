import React from 'react';

const Sponsor = ({href, image, alt}) => (
  <article className="col-3 overflow-hidden">
    <a href={href}>
      <img src={image} alt={alt} />
    </a>
  </article>
)

export default Sponsor

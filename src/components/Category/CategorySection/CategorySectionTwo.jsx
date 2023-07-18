import React from 'react';
import './category-section.scss';

const CategorySectionTwo = ({righText, rightpara}) => (
  <section id="iamge-card-text">
    <div className="row">
      <div className="leftPhotoCard">
        <img src="/assets/images/categroy-page/pnada.jpg" alt="not found" />
      </div>
      <div className="rightPargraph">
        <div className="content">
          <h3>{righText}</h3>
          <p> {rightpara} </p>
        </div>
      </div>
    </div>
  </section>
)

export default CategorySectionTwo
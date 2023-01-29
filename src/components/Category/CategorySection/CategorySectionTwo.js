import React, { useState, useEffect } from 'react';
import './category-section.css'


const CategorySectionTwo = (props) => {
    return (
        <section id="iamge-card-text">

            <div className="row">
                <div className="leftPhotoCard">
                    <img src="/assets/images/categroy-page/pnada.jpg" alt="not found" />
                </div>
                <div className="rightPargraph">
                    <div className="content">
                        <h3>{props.righText}</h3>
                        <p> {props.rightpara} </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default CategorySectionTwo;
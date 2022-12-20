import React, { useState, useEffect } from 'react';
import './category-section.css'


const CategorySection = (props) => {
    return (
        <section id="iamge-card-text">

            <div className="row">
                <div className="leftPhotoCard">
                    <img src={props.leftPhotoCard} alt="not found" />
                </div>
                <div className="rightPargraph">
                    <div className="content">
                        <h3>Promote children's films and TV shows with cartoony assets</h3>
                        <p> {props.RightPargraph} </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default CategorySection;
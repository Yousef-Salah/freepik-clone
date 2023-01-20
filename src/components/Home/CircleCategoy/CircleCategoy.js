import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './circular-category.scss';
import CirclesCategoy from '../../../utils/CirclesCategoy';

const CircleCategoy = () => {
    const circlesCategory = CirclesCategoy();

    return (
        <section id="circular-categories-container">
            {circlesCategory.map((circle, index) => {
                return (
                    <div className="circular-category" key={index}>
                        <Link className="circle-link" to={circle.link}>
                            <span>
                                <img src={circle.image} alt={circle.title} />
                            </span>
                            <p className="text">{circle.title}</p>
                        </Link>
                    </div>
                );
            })}
        </section>
    );
}
export default CircleCategoy;
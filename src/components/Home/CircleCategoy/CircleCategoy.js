import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './circle-categoy.css';
import CirclesCategoy from '../../../utils/CirclesCategoy';

const CircleCategoy = () => {
    const circlesCategory = CirclesCategoy();

    return (
        <div className="circle-card">
            {circlesCategory.map((circle, index) => {
                return (
                    <div className="circle-element" key={index}>
                        <Link className="circle-link" to={circle.link}>
                            <img src={circle.image} alt={circle.title} />
                            <p className="text">{circle.title}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}
export default CircleCategoy;
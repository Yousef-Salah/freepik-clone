import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './circular-category.scss';
import CirclesCategoy from '../../../utils/CirclesCategoy';
import SearchQuery from "../../../context/SearchQuery";

const CircleCategoy = () => {
    const circlesCategory = CirclesCategoy();
    const navigate = useNavigate();
    const searchQuery = useContext(SearchQuery);

    return (
        <section id="circular-categories-container">
            {circlesCategory.map((circle, index) => {
                return (
                    <div className="circular-category" key={index}>
                        <Link className="circle-link" to="#" onClick={(event) => {
                            event.preventDefault();
                            
                            if(circle.link === 'fonts') {
                                return navigate(`/${circle.link}`);
                            } else {
                                searchQuery.current.searchInput = circle.link;
                                return navigate(`/search/${circle.link}`);
                            }
                        }}>
                            <div className="image-border">
                                <div className="image-container">
                                    <img src={`/assets/images/circular-categories/${circle.image}`} alt={circle.title} />
                                </div>
                            </div>
                            <p className="text">{circle.title}</p>
                        </Link>
                    </div>
                );
            })}
        </section>
    );
}
export default CircleCategoy;
import React, { useState, useEffect } from 'react';
import './RelatedArticles.css';

import Great from "./Great-PowerPoint.jpg";
import Cover from "./VideoCalls_Cover.jpg";
const Related = (props) => {
  return (

    
      <div className="Related-col">
        <div className="card h-100">
          <img src={props.image} className="card-img-top" alt="..." ></img>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.heder} </p>

          </div>
        </div>
      </div>
    
    

  );
}
export default Related;
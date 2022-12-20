import React, { useState, useEffect } from 'react';
import './RelatedArticles.css';


const Related = (props) => {
  return (


    <div className="col" id='Related-col'>
      <div className="card h-100">
        <img src={props.image} className="card-img-top" alt="..." ></img>
        <div className="card-body">
          <h5 className="#Related-title"id='Related-title'>{props.title}</h5>
          <p className="Related-text"id='Related-text'>{props.heder} </p>

        </div>
      </div>
    </div>
  );
}
export default Related;
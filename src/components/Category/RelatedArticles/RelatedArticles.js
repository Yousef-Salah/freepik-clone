import React, { useState, useEffect } from 'react';
import './RelatedArticles.css';
import chosing from "./choosing-consistent.jpg";
import Great from "./Great-PowerPoint.jpg";
import Cover from "./VideoCalls_Cover.jpg";
const Related = () => {
    return (
       
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
      <img src={chosing} className="card-img-top" alt="chosing" ></img>
      <div className="card-body">
        <h5 className="card-title">Video call backgrounds: change your meeting’s look</h5>
        <p className="card-text">The year 2020 kept everyone separated. Even though many people thought that 2021 was going to be different,...</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Great} className="card-img-top" alt="Great"></img>
      <div className="card-body">
        <h5 className="card-title">10 tips for a great powerpoint presentation</h5>
        <p className="card-text">Today it is not enough for a successful performance just to tell about your idea. People certainly want to see ...</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={Cover} className="card-img-top" alt="Cover"></img>
      <div className="card-body">
        <h5 className="card-title">Tips for choosing consistent images for your designs</h5>
        <p className="card-text">One of the fundamental elements of graphic design is consistency. No matter what article, design book, workshop ...</p>
      </div>
    </div>
  </div>
    </div>
    
    );
}
export default Related;
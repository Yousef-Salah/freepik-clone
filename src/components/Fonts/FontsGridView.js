import React, { useState, useEffect } from "react";
import FontCard from "./FontCard";
import "./fontslist.css";
import { FontsData } from "./FontsData";
import arrayShuffle from "array-shuffle";
import { Link, Router } from "react-router-dom";
import FontCardGrid from "./FontCardGrid";
import Fonts from "../../pages/Fonts";
const FontsGridView = () => {
  let [shuffled, setShuffle] = useState(arrayShuffle(FontsData));
  function shuffle() {
    window.scrollTo(0, 0);
    shuffled = FontsData.sort((a, b) => 0.9 - Math.random());
    setShuffle(shuffled);
    console.log(shuffled);
  }
  return (
    <>
    <div className="grid-list position-absolute grid-view">
      <button className="list ">
        <Link to="/fonts" > 
        <i class='bx bx-list-ul'></i>
        </Link>
      </button>
      <button className="grid grid-list-selected">
        <Link to="/fontsgrid">
          <i className="bi bi-grid-3x3-gap-fill"></i>
        </Link>
      </button>
    </div>
    <ul>
    <div className="container-fluid fontsgrid">
      <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 row-cols-md-2 row-cols-xl-5">
      
        {shuffled.map((val) => {
          return (
            <div className="col gridcard">
              <li>
                <Link to={val.link}>
                  <FontCardGrid
                    name={val.fontName}
                    img={require(`../../assets/images/fonts/${val.img}`)}
                    creator={val.creator}
                    avatar={require(`../../assets/images/fonts/avatars/${val.avatar}`)}
                  />
                </Link>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  </ul>
  <button onClick={shuffle} type="button" class="btn btn-primary nextpage">
    Next Page <i class="bi bi-arrow-right"></i>
  </button></>
  )
}

export default FontsGridView

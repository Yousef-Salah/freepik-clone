import React, { useState, useEffect } from "react";
import FontCard from "./FontCard";
import "./fontslist.css";
import { FontsData } from "./FontsData";
import { Link, Router } from "react-router-dom";
import FontCardGrid from "./FontCardGrid";
import Fonts from "../../pages/Fonts";
const FontsGridView = () => {
  let [shuffled, setShuffle] = useState(FontsData);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function shuffle() {
    window.scrollTo(0, 0);
    const newShuffledArray = [...shuffled];
    shuffleArray(newShuffledArray);
    setShuffle(newShuffledArray);
  }
  return (
    <>
      <ul>
        <div className="container-fluid fontsgrid">
          <div className="grid-list grid-view" id="grid-list">
            <button className="list ">
              <Link to="/fonts">
                <i class="bx bx-list-ul"></i>
              </Link>
            </button>
            <button className="grid grid-list-selected">
              <Link to="/fontsgrid">
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </Link>
            </button>
          </div>
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 row-cols-md-2 row-cols-xl-5 cards-container">
            {shuffled.map((val) => {
              return (
                <div className="col gridcard">
                  <li>
                    <Link to={val.link}>
                      <FontCardGrid
                        name={val.fontName}
                        img={`/assets/images/fonts/${val.img}`}
                        creator={val.creator}
                        avatar={`/assets/images/fonts/avatars/${val.avatar}`}
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
      </button>
    </>
  );
};

export default FontsGridView;

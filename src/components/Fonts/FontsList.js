import React, { useState, useEffect } from "react";
import FontCard from "./FontCard";
import "./fontslist.css";
import { FontsData } from "./FontsData";
import arrayShuffle from "array-shuffle";
import { Link, Router } from "react-router-dom";
import FontCardGrid from "./FontCardGrid";
import Fonts from "../../pages/Fonts";
const FontsList = () => {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let title = document.getElementsByClassName("card-font-title");
  let fontCheckInpt = document.getElementById("fontCheck");
  let margin;
  let classe;
  let [cardTitle, setTtitle] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  cardTitle = cardTitle
    ? cardTitle
    : "The quick brown fox jumps over the lazy dog";
  let [shuffled, setShuffle] = useState(arrayShuffle(FontsData));
  let [marginTop, setMarginTop] = useState("3%");
  function shuffle() {
    window.scrollTo(0, 0);
    btn2Click();
    shuffled = shuffled.sort(function (a, b) {
      return Math.random() - Math.random() * Math.random();
    });
    
    setShuffle( shuffled.sort(function (a, b) {
      return Math.random() - Math.random() * Math.random();
    }));
    console.log(shuffled);
  }
  function fontCheck() {
    cardTitle = fontCheckInpt.value;
    setTtitle(cardTitle);
  }
  function clear() {
    btn1.classList.remove("size-selected");
    btn2.classList.remove("size-selected");
    btn3.classList.remove("size-selected");
    btn4.classList.remove("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.remove("p36");
      title[i].classList.remove("p24");
      title[i].classList.remove("p48");
      title[i].classList.remove("p72");
    }
  }
  function btn1Click() {
    clear();
    btn1.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p24");
    }
    setMarginTop("3%");
  }
  function btn2Click() {
    clear();
    btn2.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p36");
    }
    setMarginTop("2.5%");
  }
  function btn3Click() {
    clear();
    btn3.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p48");
    }
    setMarginTop("1.5%");
  }
  function btn4Click() {
    clear();
    btn4.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p72");
    }
    setMarginTop("1.3%");
  }
 return (
  <div className="fonts ">
  <h2 className="fonts-title">Type something and try our free fonts</h2>
  <br />
  <div className="titles ">
    <input
      type="text"
      id="fontCheck"
      className="form-control search "
      placeholder="The quick brown fox jumps over the lazy dog"
      onKeyUp={fontCheck}
    ></input>
    <div className="fontsizebtns">
      <button
        className="btn btn-primary fontsize"
        id="btn1"
        onClick={btn1Click}
      >
        <p className="p-fontsize">
          A
          <br />
          24pt
        </p>
      </button>
      <button
        className="btn btn-primary fontsize size-selected"
        id="btn2"
        onClick={btn2Click}
      >
        <p>
          A
          <br />
          36pt
        </p>
      </button>
      <button
        className="btn btn-primary fontsize"
        id="btn3"
        onClick={btn3Click}
      >
        <p>
          A
          <br />
          48pt
        </p>
      </button>
      <button
        className="btn btn-primary fontsize"
        id="btn4"
        onClick={btn4Click}
      >
        <p>
          A
          <br />
          72pt
        </p>
      </button>
    </div>
    <div className="grid-list position-absolute ">
      <button className="list grid-list-selected">
        <Link to="/fonts" > 
        <i class='bx bx-list-ul'></i>
        </Link>
      </button>
      <button className="grid">
        <Link to="/fontsgrid">
          <i className="bi bi-grid-3x3-gap-fill"></i>
        </Link>
      </button>
    </div>
  </div>
  <ul>
    {shuffled.map((val) => {
      return (
        <li>
          <Link to={val.link}>
            <FontCard
              title={cardTitle}
              fontName={val.fontName}
              img={require(`../../assets/images/fonts/${val.img}`)}
              stylesCount={val.numberOfStyles}
              font={val.font}
              margin={marginTop}
            />
          </Link>
        </li>
      );
    })}
  </ul>
  <button onClick={shuffle} type="button" class="btn btn-primary nextpage">
    Next Page <i class="bi bi-arrow-right"></i>
  </button>
  </div>
  );
};

export default FontsList;

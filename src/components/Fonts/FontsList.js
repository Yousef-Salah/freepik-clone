import React, { useState } from "react";
import FontCard from "./FontCard";
import "./fontslist.css";
import { FontsData } from "./FontsData";
import { Link } from "react-router-dom";
const FontsList = () => {
  let btn1 = document.getElementById("btn1");
  let btn2 = document.getElementById("btn2");
  let btn3 = document.getElementById("btn3");
  let btn4 = document.getElementById("btn4");
  let title = document.getElementsByClassName("card-font-title");
  let nameCount = document.getElementsByClassName("name-count");
  let fontCheckInpt = document.getElementById("fontCheck");
  let [cardTitle, setTtitle] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  cardTitle = cardTitle
    ? cardTitle
    : "The quick brown fox jumps over the lazy dog";
  let [shuffled, setShuffle] = useState(FontsData);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function shuffle() {
    window.scrollTo(0, 0);
    button2Click();
    const newShuffledArray = [...shuffled];
    shuffleArray(newShuffledArray);
    setShuffle(newShuffledArray);
    console.log(newShuffledArray);
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
      nameCount[i].classList.remove("margin3");
      nameCount[i].classList.remove("margin25");
      nameCount[i].classList.remove("margin15");
      nameCount[i].classList.remove("margin13");
    }
  }
  function button1Click() {
    clear();
    btn1.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p24");
      nameCount[i].classList.add("margin3");
    }
  }
  function button2Click() {
    clear();
    btn2.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p36");
      nameCount[i].classList.add("margin25");
    }
  }
  function button3Click() {
    clear();
    btn3.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p48");
      nameCount[i].classList.add("margin15");
    }
  }
  function button4Click() {
    clear();
    btn4.classList.add("size-selected");
    for (let i = 0; i < title.length; i++) {
      title[i].classList.add("p72");
      nameCount[i].classList.add("margin13");
    }
  }
  return (
    <div className="fonts ">
      <h2 className="fonts-title">Type something and try our free fonts</h2>
      <br />
      <div className="titles row row-cols-lg-3 row-cols-sm-3 row-cols-1">
        <input
          type="text"
          id="fontCheck"
          className="form-control search col"
          placeholder="The quick brown fox jumps over the lazy dog"
          onKeyUp={fontCheck}
        ></input>

        <div className="fontsizebtns col">
          <button
            className="btn btn-primary fontsize"
            id="btn1"
            onClick={button1Click}
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
            onClick={button2Click}
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
            onClick={button3Click}
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
            onClick={button4Click}
          >
            <p>
              A
              <br />
              72pt
            </p>
          </button>
          <div className="grid-list position-absolute col">
            <button className="list grid-list-selected">
              <Link to="/fonts">
                <i class="bx bx-list-ul"></i>
              </Link>
            </button>
            <button className="grid">
              <Link to="/fontsgrid">
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </Link>
            </button>
          </div>
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

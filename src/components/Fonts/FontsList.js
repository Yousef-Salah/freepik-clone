import React, { useState } from "react";
import FontCard from "./FontCard";
import "./fontslist.css";
import { FontsData } from "./FontsData";
import { Link } from "react-router-dom";
const FontsList = () => {
  let [cardTitle, setTtitle] = useState(
    "The quick brown fox jumps over the lazy dog"
  );
  const [selected, setSelected] = useState({
    btn1Class: "",
    btn2Class: "size-selected",
    btn3Class: "",
    btn4Class: "",
  });
  const sizes = {
    btn1Size: ["p24", "margin3"],
    btn2Size: ["p36", "margin25"],
    btn3Size: ["p48", "margin15"],
    btn4Size: ["p72", "margin15"],
  };
  const [size, setSize] = useState(["p36", "margin25"]);
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
    const newShuffledArray = [...shuffled];
    shuffleArray(newShuffledArray);
    setShuffle(newShuffledArray);
  }
  function fontCheck(e) {
    cardTitle = e.target.value;
    setTtitle(cardTitle);
  }
  function buttonClick(e) {
    let id = e.currentTarget.id;
    let newClasses = { ...selected };
    Object.keys(newClasses).forEach((key) => {
      if (key == id + "Class") {
        newClasses[key] = "size-selected";
      } else {
        newClasses[key] = "";
      }
    });
    Object.keys(sizes).forEach((key) => {
      if (key == id + "Size") {
        setSize(sizes[key]);
      }
    });
    setSelected(newClasses);
  }
  return (
    <div className="fonts ">
      <h2 className="fonts-title">Type something and try our free fonts</h2>
      <br />
      <div className="titles row row-cols-lg-3 row-cols-sm-3 row-cols-1">
        <input
          type="text"
          id="fontCheck"
          className="form-control fontcheck col"
          placeholder="The quick brown fox jumps over the lazy dog"
          onKeyUp={fontCheck}
        ></input>

        <div className="fontsizebtns col">
          <button
            className={`btn btn-primary fontsize  ${selected.btn1Class}`}
            id="btn1"
            onClick={buttonClick}
          >
            <p className="p-fontsize">
              A
              <br />
              24pt
            </p>
          </button>
          <button
            className={`btn btn-primary fontsize ${selected.btn2Class}`}
            id="btn2"
            onClick={buttonClick}
          >
            <p>
              A
              <br />
              36pt
            </p>
          </button>
          <button
            className={`btn btn-primary fontsize ${selected.btn3Class}`}
            id="btn3"
            onClick={buttonClick}
          >
            <p>
              A
              <br />
              48pt
            </p>
          </button>
          <button
            className={`btn btn-primary fontsize ${selected.btn4Class}`}
            id="btn4"
            onClick={buttonClick}
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

      <ul className="fonts-list">
        {shuffled.map((val) => {
          return (
            <li>
              <Link to={val.link}>
                <FontCard
                  title={cardTitle}
                  fontName={val.fontName}
                  img={`/assets/images/fonts/${val.img}`}
                  stylesCount={val.numberOfStyles}
                  font={val.font}
                  fontSize={size[0]}
                  margin={size[1]}
                />
              </Link>
            </li>
          );
        })}
      </ul>
      <button
        onClick={shuffle}
        type="button"
        className="btn btn-primary nextpage"
      >
        Next Page <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};
export default FontsList;

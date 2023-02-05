import React, { useState, useEffect } from "react";
import CollectionCard from "../../Collection/CollectionCard";

import "./search-results.scss";
import Searchimgcard from "./Searchimgcard";
import SearchResultHeader from "./SearchResultHeader";

const SearchResults = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalData, setModalData] = useState({});
  const [loaded, setLoaded] = useState(false);

  const cardStyles = ["card-wrapper", "card-wrapper card-wrapper-flexed"];
  useEffect(() => {
    setLoaded(true);
  }, [props.images]);

  const toggleModal = () => {
    setModalDisplay(!modalDisplay);
  };

  const modalHandler = (item) => {
    props.modalLift(item);
  };

  return (
    <div id="search-results">
      <SearchResultHeader
        title={"Showing results for " + props.title}
        sort={true}
      />
      <div className="search-description" id="pills-tab" role="tablist">
        <li class="nav-item-search" role="presentation">
          <button
            className="active"
            id="grid-cards-tab"
            data-bs-toggle="pill"
            data-bs-target="#grid-cards"
            type="button"
            role="tab"
            aria-controls="grid-cards"
            aria-selected="true">
            Images {props.images.length}
          </button>
        </li>{" "}
        <li class="nav-item-search" role="presentation">
          <button
            id="collection-cards-tab"
            data-bs-toggle="pill"
            data-bs-target="#collection-cards"
            type="button"
            role="tab"
            aria-controls="collection-cards"
            aria-selected="false">
            Collections {0}
          </button>
        </li>
      </div>
      <div id="grid-cards" className="tab-pane fade show active">
        {props.images.map((item, idx) => {
          return (
            <div
              key={idx}
              className={cardStyles[1]}
              onClick={() => modalHandler(item)}>
              <Searchimgcard Cardphoto={item} />
            </div>
          );
        })}
      </div>
      <div className="tab-pane fade" id="collection-cards">
        <div className="collection-card-wrapper">
          <CollectionCard card={props.images[0]} />
        </div>
        <h1>LOL</h1>
      </div>
    </div>
  );
};

export default SearchResults;


import React, { useState, useEffect } from "react";

import "./search-results.scss";
import Searchimgcard from "./Searchimgcard";
import SearchResultHeader from "./SearchResultHeader";
import ModalTrigger from "../../Category/PreviewModal/ModalTrigger";

const SearchResults = (props) => {
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalData, setModalData] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [props.images]);

  const toggleModal = () => {
    // props.modalStatus(!modalDisplay);
    setModalDisplay(!modalDisplay);
  };

  const modalHandler = (item) => {
    setModalData(item);
    toggleModal();
  };

  return (
    <>
      {loaded && <ModalTrigger displayStatus={modalDisplay} data={modalData} />}
      <SearchResultHeader
        title={"Showing results for " + props.title}
        sort={true}
      />
      <div id="grid-cards" className={!props.visible ? "d-none" : ""}>
        {props.images.map((item, idx) => {
          return (
            <div
              key={idx}
              className="card-wrapper"
              onClick={() => modalHandler(item)}>
              <Searchimgcard Cardphoto={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchResults;


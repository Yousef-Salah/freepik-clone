import React, { useState, useEffect } from "react";
import "./search-results.scss";
import FinalImages from "../../../utils/FinalImages.json";
import Searchimgcard from "./Searchimgcard";
const SearchResults1 = () => {
  const [images, setImages] = useState(FinalImages);
  const [filteredImages, setFilteredImages] = useState([]);
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalData, setModalData] = useState({});
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    let _filteredImages = images.filter((image) =>
      image.title.toLowerCase().includes("background")
    );

    setFilteredImages(_filteredImages);
  }, []);

  useEffect(() => {
    setLoaded(true);
  }, [filteredImages]);
  const item = filteredImages[0];
  return (
    <section className="container-fluid" id="SearchCard">
      <div className="grid">
        <div className="row">
        {filteredImages.map((item) => {
          return (
            <div className="col-3">
              <Searchimgcard Cardphoto={item} />
            </div>
          )
        })}
        </div>
      </div>
    </section>
  );
};
export default SearchResults1;

import { DiscoverCollectionList } from "../../utils/DiscoverCollectionList";
import "./discover-collections.css";
import React from "react";
import { Link } from "react-router-dom";

const DiscoverCollections = () => {
  return (
    <div className="discover-collection-row">
      {DiscoverCollectionList.map((item, idx) => {
        return (
          <div className="collection-card" key={idx}>
            <Link to={"/search/" + item.discoverpara}>
              <div className="media-section">
                <div className="col-6 discover-collection-col">
                  <div className="row discover-collection-row2">
                    <img src={`assets/images/collection-page/${item.link}`} className="discover-img1" />
                  </div>
                  <div className="row discover-collection-row3">
                    <img src={`assets/images/collection-page/${item.link2}`} className="discover-img2" />
                  </div>
                </div>
                <div className="col-6 discover-collection-col">
                  <img src={`assets/images/collection-page/${item.link3}`} className="discover-img3" />
                </div>
              </div>
              <div className="collection-card-info">
                <div className="para-col">
                  <p className="discover-para">{item.discoverpara}</p>
                </div>
                <div className="">
                  <div className="dropdown-div">
                    <button
                      className="discover-dropDown"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <i className="bi bi-three-dots-vertical"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" type="button">
                          Share
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" type="button">
                          Follow
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="discover-resources">{item.discoverresource}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default DiscoverCollections;

import React from "react";
import CreatorCollections from "./CreatorCollections";
import CreatorCollectionTitle from "./CreatorCollectionTitle";

const CreatorCollection = () => {
  return (
    <>
      <div className="row collection-row">
        {CreatorCollectionList.map((item, idx) => {
          return (
            <div className="col-2 d-collection-col" key={idx}>
              <div className="creator-collection-div">
                <img className="creator-collection-img1" src={`/assets/images/creator-collection/${item.link}`} />
                <img className="creator-collection-img" src={`/assets/images/creator-collection/${item.link}`} />
                <div className="row c-c-t-r">
                  <p className="creator-collection-text">{item.ctext}</p>
                  <p id="resoursess">{item.cresources}</p>
                </div>
              </div>
            </div>
          );
        })}{" "}
        <ExploreCard />
      </div>
    </>
  );
};
export default CreatorCollection;

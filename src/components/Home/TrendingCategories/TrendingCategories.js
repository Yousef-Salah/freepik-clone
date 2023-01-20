import React, { useState, useEffect } from "react";

import "./trending-category.css";
import TrendingCard from "./TrendingCard";

import Cardsphotos from "./Cardsphotos";
const TrendingCategories = (props) => {
  const [headingDisplay, setHeadingDisplay] = useState(true);
  const data = Cardsphotos();

  useEffect(() => {
    if (props.headingDisplay === false) {
      setHeadingDisplay(false);
    }
  }, [props.headingDisplay]);
  return (
    <section className="container-fluid" id="trending">
      <h2 id="explore-title">
        <strong>Explore</strong> trending categories on Freepik
      </h2>
      <p className="text-muted">
        Check what's popular on Freepik and make your project look trendy and
        professional.
      </p>

      <div className="grid" id="exploretrend">
        {data.map((Trendingphoto, idx) => {
          return (
            <div className="trenditem" id={Trendingphoto.id} key={idx}>
              <TrendingCard Trendingphoto={Trendingphoto} />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TrendingCategories;

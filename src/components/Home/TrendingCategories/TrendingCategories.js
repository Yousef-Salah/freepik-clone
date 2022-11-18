import "./trending-category.css";
import TrendingCard from "./TrendingCard";
const TrendingCategories = (props) => {
  return (
    <section className="container-fluid" id="trending">
      <h2 className="title">
        <strong>Explore</strong> trending categories on Freepik
      </h2>
      <p className="text-muted">
        Check what's popular on Freepik and make your project look trendy and
        professional.
      </p>
      <div className="grid" id="exploretrend">
        <div className="item" id="Freedom">
          <TrendingCard
            imglink="assets/images/Trending/1.jpeg"
            phototitle="Freedom Photos"
          />
        </div>
        <div className="item" id="Recycle">
          <TrendingCard
            imglink="assets/images/Trending/2.jpeg"
            phototitle="Recycling"
          />
        </div>
        <div className="item" id="Flower">
          <TrendingCard
            imglink="assets/images/Trending/3.jpeg"
            phototitle="Flower Images"
          />
        </div>
        <div className="item" id="Christmas">
          <TrendingCard
            imglink="assets/images/Trending/4.jpeg"
            phototitle="Christmas 2022"
          />
        </div>
        <div className="item" id="Analog">
          <TrendingCard
            imglink="assets/images/Trending/5.jpeg"
            phototitle="Analog Photos"
          />
        </div>
        <div className="item" id="Smile">
          <TrendingCard
            imglink="assets/images/Trending/6.jpeg"
            phototitle="Smile Images"
          />
        </div>
        <div className="item" id="Body">
          <TrendingCard
            imglink="assets/images/Trending/7.jpeg"
            phototitle="Body Positive"
          />
        </div>
        <div className="item" id="Selfies">
          <TrendingCard
            imglink="assets/images/Trending/8.jpeg"
            phototitle="Selfies Photos"
          />
        </div>
        <div className="item" id="Tote-Bag">
          <TrendingCard
            imglink="assets/images/Trending/9.jpeg"
            phototitle="Tote Bag Mockup"
          />
        </div>
      </div>
    </section>
  );
};
export default TrendingCategories;

import "./Trending.css";
import "./Trending";
import TrendingPhoto from "./Trendingphotos";
const Trending = (props) => {
  return (
    <section className="container-fluid" id="trending">
      <h2 className="title">
        <strong>Explore</strong> trending categories on Freepik
      </h2>
      <p className="text-muted">
        Check what's popular on Freepik and make your project look trendy and
        professional.
      </p>
        <div className="grid">
          <div className="item" id="Freedom">
            <TrendingPhoto
              imglink="photos/Trending/1.jpeg"
              phototitle="Freedom Photos"
            />
          </div>
          <div className="item" id="Recycle">
            <TrendingPhoto
              imglink="photos/Trending/2.jpeg"
              phototitle="Recycling"
            />
          </div>
          <div className="item" id="Flower">
            <TrendingPhoto
              imglink="photos/Trending/3.jpeg"
              phototitle="Flower Images"
            />
          </div>
          <div className="item" id="Christmas">
            <TrendingPhoto
              imglink="photos/Trending/4.jpeg"
              phototitle="Christmas 2022"
            />
          </div>
          <div className="item" id="Analog">
            <TrendingPhoto
              imglink="photos/Trending/5.jpeg"
              phototitle="Analog Photos"
            />
          </div>
          <div className="item" id="Smile">
            <TrendingPhoto
              imglink="photos/Trending/6.jpeg"
              phototitle="Smile Images"
            />
          </div>
          <div className="item" id="Body">
            <TrendingPhoto
              imglink="photos/Trending/7.jpeg"
              phototitle="Body Positive"
            />
          </div>
          <div className="item" id="Selfies">
            <TrendingPhoto
              imglink="photos/Trending/8.jpeg"
              phototitle="Selfies Photos"
            />
          </div>
          <div className="item" id="Tote-Bag">
            <TrendingPhoto
              imglink="photos/Trending/9.jpeg"
              phototitle="Tote Bag Mockup"
            />
          </div>
        </div>
    </section>
  );
};
export default Trending;

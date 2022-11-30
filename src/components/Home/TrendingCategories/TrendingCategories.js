import "./trending-category.css";
import TrendingCard from "./TrendingCard";
import Cardsphotos from "./Cardsphotos";
const TrendingCategories = () => {
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
        {Cardsphotos.map((Trendingphoto) => {
          return (
            <div className="item" id={Trendingphoto.id}>
              <TrendingCard
                id={Trendingphoto.id}
                imglink={Trendingphoto.imglink}
                phototitle={Trendingphoto.phototitle}
                weburl={Trendingphoto.weburl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default TrendingCategories;

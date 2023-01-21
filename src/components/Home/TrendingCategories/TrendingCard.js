import { Link } from "react-router-dom";
const TrendingCard = ({ Trendingphoto }) => {
  return (
    <div className="container" id="trend-content">
      <div className="trend-zoom" key={Trendingphoto.id}>
        <Link to={"/search/" + Trendingphoto.title}>
          <img
            className="trendimg"
            src={`/${Trendingphoto.image}`}
            alt={Trendingphoto.title}
          />
          <p className="trendtext">{Trendingphoto.title}</p>
        </Link>
      </div>
    </div>
  );
};
export default TrendingCard;

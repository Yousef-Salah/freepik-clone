import { Link } from "react-router-dom";
const TrendingCard = ({Trendingphoto}) => {
    <div className="container" id="trend-content">
      <div className="trend-zoom" key={Trendingphoto.id}>
        <Link to={Trendingphoto.weburl}>
          <img
            className="trendimg"
            src={Trendingphoto.imglink}
            alt={Trendingphoto.phototitle}
          />
          <p className="trendtext">{Trendingphoto.phototitle}</p>
        </Link>
      </div>
    </div>

};
export default TrendingCard;
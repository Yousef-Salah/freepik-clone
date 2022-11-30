import { Link } from "react-router-dom";
const TrendingCard = ({Trendingphoto}) => {
  return(
    <div className="container" id="trend-content">
      <div className="trend-zoom" key={Trendingphoto.id}>
        <Link to={Trendingphoto.weburl}>
          <img
            className="trendimg"
            src={require(`../../../${Trendingphoto.image}`)}
            alt={Trendingphoto.title}
          />
          <p className="trendtext">{Trendingphoto.title}</p>
        </Link>
      </div>
    </div>
  );
};
export default TrendingCard;

/*
const TrendingCard = (props) => {
  return (
    <div className="container" id="trend-content">
      <div className="trend-zoom">
        <img className="trendimg" src={require(`../../../${props.imglink}`)} alt={props.title}></img>
        <p className="trendtext">{props.phototitle}</p>
        <Link to={props.weburl} />
      </div>
    </div>
  );
};
export default TrendingCard;
*/

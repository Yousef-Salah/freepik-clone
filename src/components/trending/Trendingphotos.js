const TrendingPhoto = (props) => {
  return (
    <div className="container">
      <div className="trend">
        <img className="trendimg" src={props.imglink}></img>
        <p className="trendtext">{props.phototitle}</p>
      </div>
    </div>
  );
};
export default TrendingPhoto;

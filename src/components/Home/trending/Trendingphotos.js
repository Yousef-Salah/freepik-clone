const TrendingPhoto = (props) => {
  return (
    <div className="container">
      <div className="trend">
        <img className="trendimg" src={require(`../../../${props.imglink}`)} alt={props.title}></img>
        <p className="trendtext">{props.phototitle}</p>
      </div>
    </div>
  );
};
export default TrendingPhoto;

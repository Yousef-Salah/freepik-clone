const Trendingphotos = (props) => {
  return (
    <div className="container" id="trend-content">
      <div className="trend">
        <img className="trendimg" src={require(`../../../${props.imglink}`)} alt={props.title}></img>
        <p className="trendtext">{props.phototitle}</p>
      </div>
    </div>
  );
};
export default Trendingphotos;

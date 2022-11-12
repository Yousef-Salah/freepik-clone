const Trendingphotos = (props) => {
  return (
    <div className="container" id="trend-content">
      <div className="trend">
        <img className="trendimg" src={props.imglink} alt=""></img>
        <p className="trendtext">{props.phototitle}</p>
      </div>
    </div>
  );
};
export default Trendingphotos;

import "./promote.css";
const Prosss = (props) => {
  return (
    <div className="promote-content">
      <div className="icon-box symbol">
        <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-star">
          <path d={props.icon} />
        </svg>
      </div>
      <div className="promote-desc" id="paragraph">
        <div className="caption">
          <h3 className="icon-title">{props.heder}</h3>
          {props.title}
        </div>
      </div>
    </div>
  );
};
export default Prosss;


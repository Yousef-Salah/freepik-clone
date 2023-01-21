import "./Promote.css";
const Prosss = (props) => {
  return (
    <div>
      <div className="container" id="Pomote-container">
        <div className="row " id="promote-content">
          <div className="col-2" id="symbol">
            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-star">
              <path d={props.icon} />
            </svg>
          </div>
          <div className="col-10" id="paragraph">
            <div className="caption">
              <h3 className="iconTitle">{props.heder}</h3>
              {props.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prosss;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const PreviewModal = (props) => {
  
  const [visibility, setVisibility] = useState("");

  const exitButtonHandler = (e) => {
    e.preventDefault();
    setVisibility("d-none");
    document.body.style.overflow = "visible";
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  })

  // ! hating web design
  return(
    <div id="preview-modal" className={visibility}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 d-flex justify-content-center align-items-center">
            <Link to={"#"} className="position-absolute d-flex justify-content-center align-items-center bg-fill-animation">
              <i className="fa-solid fa-angle-left"></i>
            </Link>
          </div>
          <div className="col-10" id="main-content">
            {props.children}
          </div>
          <div className="col-1 d-flex justify-content-center align-items-center">
            <Link to={""} onClick={exitButtonHandler} id="exit-btn" className="position-absolute d-flex justify-content-center align-self-start align-items-center bg-fill-animation">
              <i className="fa-solid fa-xmark"></i>
            </Link>
            <Link to={""} className="position-absolute d-flex justify-content-center align-items-center bg-fill-animation">
              <i className="fa-solid fa-angle-right opacity-100"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;
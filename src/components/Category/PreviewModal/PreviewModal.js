import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./preview-modal.css";


const PreviewModal = (props) => {

  useEffect(() => {
    // document.getElementById("preview-model")
    //         .addEventListener("wheel", (e) => {
    //           e.preventDefault();
    //         });
  })

  // ! hating web design
  return(
    <div id="preview-modal">
      <div className="container-fluid">
        <div className="row">
          <div className="col-1 position-relative d-flex justify-content-center align-items-center">
            <Link to={"#"} className="position-absolute d-flex justify-content-center align-items-center bg-fill-animation">
              <i class="fa-solid fa-angle-left"></i>
            </Link>
          </div>
          <div className="col-10" id="main-content">
            {props.children}.
          </div>
          <div className="col-1 position-relative d-flex justify-content-center align-items-center">
            <Link to={""} className="position-absolute d-flex justify-content-center align-items-center bg-fill-animation">
              <i class="fa-solid fa-angle-right opacity-100"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;
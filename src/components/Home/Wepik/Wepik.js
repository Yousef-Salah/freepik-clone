import React from "react";
import './wepik.css';

const Wepik = () => {
    return (
        <div className="wepik-cont" id="wepik">
            <div className="col-6 wepik">
                <img className="wepik-logo " src="https://freepik.cdnpk.net/img/logos/wepik-colored.svg" alt="wepik-logo" />
                <h4 className="wepik-header" >
                    Create beautiful designs online.
                </h4>
                <p className="wepik-paragraph">
                    Customize and download free templates to make stunning designs with our online editing tool.
                </p>
                <button type="button" className="btn btn-primary btn-lg wepik-btn" >Start editing online </button>
            </div>

            <div className="col-6 d-sm-none d-none d-lg-block wepik-photo">
                <img src='wepikPhoto.png' alt="wepik-pho" />
            </div>
        </div>



    );
}
export default Wepik;
import React from "react";
import './wepik.css';

const Wepik = () => {
    return (
        <div className="wepik-cont" id="wepik">
            <div className="col-6 wepik">
                <img className="wepik-logo " src="https://freepik.cdnpk.net/img/logos/wepik-colored.svg" />
                <h4 className="wepik-header" >
                    Create beautiful designs online.
                </h4>
                <p className="wepik-paragraph">
                    Customize and download free templates to make stunning designs with our online editing tool.
                </p>
                <button type="button" className="btn btn-primary btn-lg wepik-btn" >Start editing online </button>
            </div>

            <div className="col-6 wepik-photo">
                <img src='wepikPhoto.png' />
            </div>
        </div>



    );
}
export default Wepik;
import React from 'react';
import './wepik.css';
const Wepik = (props) => {
    return (
        <div className="wepik-cont" id="wepik">
            <div className="col-6 wepik">
                <img className="wepik-logo " src={props.logoUrl} alt="wepik-logo" />
                <h4 className="wepik-header" >
                    {props.headerText}
                </h4>
                <p className="wepik-paragraph">
                    {props.paragraphText}
                </p>
                <button type="button" className="btn btn-primary btn-lg wepik-btn" >{props.buttonText}</button>
            </div>

            <div className="col-6 d-sm-none d-none d-lg-block wepik-photo">
                <img src={props.photoUrl} alt="wepik-pho" />
            </div>
        </div>
    );
}

export default Wepik;

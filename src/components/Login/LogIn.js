import { Link } from "react-router-dom";
import "./logIn.css"

const LogIn = ({ Login }) => {
  return (
    <div className="container-fluid text-center" id="login">
      <div className="row" id="log-in-row">
        <nav className="col-lg-8" id="loginphoto">
          <img className="login-img" src='/assets/images/loginsignup/1.jpeg' alt={"nature photos"} />
          <div className="login-imgby">
            Image by
            <Link to={"/"}>
              <strong>freepik</strong>
            </Link>
          </div>
        </nav>
        <nav className="col-lg-4" id="login-form">
          <img src='/assets/images/loginsignup/freepiklogo.png' alt="freepik logo" className="login-freepik"/>
          <p className="h4" id="log-in">Log in</p>
          <nav className="row" id="login-btns">
          <button className="login-btn" id="login-btn-google">
            <i className="bi bi-google" id="login-icon-google"></i>
            <p>Continue with Google</p>
          </button>
          <button className="login-btn" id="login-btn-facebook">
            <i className="bi bi-facebook" id="login-icon-facebook"></i>
            <p>Continue with Facebook</p>
          </button>
          <button className="login-btn" id="login-btn-email">
            <i className="bi bi-envelope " id="login-icon-email"></i>
            <p>Continue with email</p>
          </button>
          </nav>
          <p className="row-flex" id="addaccount">
            Don’t you have an account?
            <Link to={"/signup"}>
              <strong> Sign up</strong>
            </Link>
          </p>
          <nav className="freepik-company">
            <p className="text-muted">by</p>
            <Link to={'/'}>
            <img
            className="freepikcompany"
              src="/assets/images/loginsignup/freepik-company.png"
              alt="By freepik company"
            ></img>
            </Link>
          </nav>

        </nav>
      </div>
    </div>
  );
};
export default LogIn;

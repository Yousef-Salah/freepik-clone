import { Link } from "react-router-dom";
import "./logIn.css"

const LogIn = ({ Login }) => {
  return (
    <div className="container text-center" id="login">
      <div className="row">
        <div className="col-6">
          <img className="login-img"src={"assets/images/loginsignup/1.jpeg"}alt={"nature photos"} />
          <p>
            Image by
            <Link to={"/home"}>
              <strong>freepik</strong>
            </Link>
          </p>
        </div>
        <div className="col-6" id="login-form">
          <img src="assets/images/loginsignup/freepiklogo.png" alt="freepik logo"/>
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
            <Link to={"/"}>
              <strong> Sign up</strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LogIn;

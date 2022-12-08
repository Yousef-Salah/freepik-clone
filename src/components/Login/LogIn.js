import { Link } from "react-router-dom";

const LogIn = ({ Login }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <img className="login-img" src={Login.img_thumb} alt={""} />
          <p>
            Image by
            <Link to={"/home"}>
              <strong>freepik</strong>
            </Link>
          </p>
        </div>
        <div className="col-sm" id="login-form">
          <h2 className="log-in">Log IN</h2>
          <button className="google-btn">
            <i className="bi bi-google"></i>
            <p>Continue with Google</p>
          </button>
          <button className="facebook-btn">
            <i className="bi bi-facebook"></i>
            <p>Continue with Facebook</p>
          </button>
          <button className="email-btn">
            <i className="bi bi-envelope"></i>
            <p>Continue with email</p>
          </button>
          <p>
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

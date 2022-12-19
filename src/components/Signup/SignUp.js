import { Link } from "react-router-dom";
import "./signup.css";
const SignUp = () => {
  return (
    <div className="container text-center" id="Signup">
      <div className="row" id="Sign-up">
        <div className="Sign-up-photo col-8">
          <img
            className="signup-img"
            src={require("../../assets/images/loginsignup/3.jpeg")}
            alt={"baby photos"}
          />
          <div className="signup-imgby">
            Image by
            <Link to={"/"}>
              <strong>freepik</strong>
            </Link>
          </div>
        </div>
        <div className="Sign-up-form col-4">
          <img
            className="signup-freepik"
            src={require("../../assets/images/loginsignup/freepiklogo.png")}
            alt="freepik logo"
          />
          <p className="h4" id="sign-up">
            Create an account
          </p>
          <nav className="signupinputs container">
            <nav className="row" id="signup-btns">
              <button className="signup-btn" id="signup-btn-google">
                <i className="bi bi-google" id="signup-icon-google"></i>
                <p>Continue with Google</p>
              </button>
              <button className="signup-btn" id="signup-btn-facebook">
                <i className="bi bi-facebook" id="signup-icon-facebook"></i>
                <p>Continue with Facebook</p>
              </button>
              <button className="signup-btn" id="signup-btn-email">
                <i className="bi bi-envelope " id="signup-icon-email"></i>
                <p>Continue with email</p>
              </button>
            </nav>
            <nav className="Freepiknews">
              <input
                type="checkbox"
                name="freepiknews"
                className="newscheckbox"
              ></input>
              <p className="freepik-news">
                I do not wish to receive news and promotions from Freepik
                Company by email.
              </p>
            </nav>
          </nav>
          <p className="signupTerms text-muted">
            By continuing, you agree to Freepik Company’s Terms of Use and
            Privacy Policy.
          </p>
          <p className="row-flex" id="logintoaccount">
            Already have an account
            <Link to={"/login"}>
              <strong>Log in</strong>
            </Link>
          </p>
          <nav className="freepik-company">
            <p className="text-muted">by</p>
            <Link to={'/'}>
            <img
            className="freepikcompany"
              src={require("../../assets/images/loginsignup/freepik-company.png")}
              alt="By freepik company"
            ></img>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default SignUp;

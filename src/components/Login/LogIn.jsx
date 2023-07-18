import React from 'react'
import { Link } from 'react-router-dom'
import DocumentTitleHandler from '../Common/DocumentTitleHandler'
import './logIn.scss'

const LogIn = () => (
  <>
    <div className="container-fluid text-center" id="login">
      <div className="row" id="log-in-row">
        <nav className="col-lg-8" id="loginphoto">
          <img
            className="login-img"
            src="/assets/images/account_premium/login_signup/1.jpeg"
            alt="nature photos"
          />
          <div className="login-imgby">
            Image by
            <Link to="/">
              <strong>freepik</strong>
            </Link>
          </div>
        </nav>
        <nav className="col-lg-4" id="login-form">
          <Link to="/">
            <img
              src="/assets/images/account_premium/login_signup/freepiklogo.png"
              alt="freepik logo"
              className="login-freepik"
            />
          </Link>
          <p className="h4" id="log-in">
            Log in
          </p>
          <nav className="row" id="login-btns">
            <button className="login-btn" id="login-btn-google" type="submit">
              <i className="bi bi-google" id="login-icon-google" />
              <p>Continue with Google</p>
            </button>
            <button className="login-btn" id="login-btn-facebook" type="submit">
              <i className="bi bi-facebook" id="login-icon-facebook" />
              <p>Continue with Facebook</p>
            </button>
            <button className="login-btn" id="login-btn-email" type="submit">
              <i className="bi bi-envelope " id="login-icon-email" />
              <p>Continue with email</p>
            </button>
          </nav>
          <div className="more-login-info">
            <p className="row-flex" id="addaccount">
              Don’t you have an account?{' '}
              <Link to="/signup">
                <strong>Sign up</strong>
              </Link>
            </p>
            <nav className="freepik-company">
              <p className="text-muted">by</p>
              <Link to="/">
                <img
                  className="freepikcompany"
                  src="/assets/images/account_premium/login_signup/freepik-company.png"
                  alt="By freepik company"
                />
              </Link>
            </nav>
          </div>
        </nav>
      </div>
    </div>
    <DocumentTitleHandler pageTitle="Log In" />
  </>
)
export default LogIn

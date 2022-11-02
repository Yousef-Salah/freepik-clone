import React from 'react'
import './nav-bar.scss';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler">
                        <span>
                            <img src={require('../../assets/images/burger-menu-toggle.png')} alt="burger-menu-toggle" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse">
                        <a href="x">
                            <img className="nav-logo" src={require('../../assets/images/freepik-no_bg.png')} alt="logo" />
                        </a>
                        <div className="nav-menus">

                            <div className="nav-menu">
                                <ul>
                                    <li><a href="https://www.freepik.com/popular-vectors">Vectors</a></li>
                                    <li><a href="https://www.freepik.com/popular-photos">Photos</a></li>
                                    <li><a href="https://www.freepik.com/popular-psd">PSD</a></li>
                                    <li>
                                        <a href="https://www.freepik.com/popular-psd">3D</a>
                                        <button className="btn">NEW</button>
                                    </li>
                                    <li><a href="https://www.freepik.com/popular-psd">Fonts</a></li>
                                    <li>
                                        <a href="https://www.freepik.com/popular-psd">Categories
                                            <i className="bi bi-caret-down-fill"></i>
                                        </a>
                                    </li>
                                    <li><a href="https://www.freepik.com/popular-psd">Collections</a></li>
                                    <li><a href="https://www.freepik.com/popular-psd">More
                                        <i className="bi bi-caret-down-fill"></i>
                                    </a></li>
                                </ul>
                            </div>
                            <div className="pricing-nav">
                                <ul>
                                    <li><a href='https://www.freepik.com/popular-psd'>Sell Content</a></li>
                                    <li><a className="pricing-color" href='https://www.freepik.com/popular-psd'>Pricing</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-menu-user">
                    <ul>
                        <li>
                            <a className='login-link' href="https://www.freepik.com/popular-psd">Log in </a>
                        </li>
                        <li>
                            <button className="signup-btn">Sign Up</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
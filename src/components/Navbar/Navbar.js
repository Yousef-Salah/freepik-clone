import React from 'react'
import './nav-bar.scss';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="xnavbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <img src={require('../../assets/images/burger-menu-toggle.png')} alt="burger-menu-toggle" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <a href="x">
                            <img src={require('../../assets/images/freepik-no_bg.png')} alt="logo" />
                        </a>
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
                                <li><a href="https://www.freepik.com/popular-psd">Categories</a></li>
                                <li><a href="https://www.freepik.com/popular-psd">Collections</a></li>
                                <li><a href="https://www.freepik.com/popular-psd">More</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
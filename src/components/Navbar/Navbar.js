import React, { useState } from 'react';
import './nav-bar.scss';

import Categories from '../../utils/Categories';
import MoreContent from '../../utils/MoreContent';

const Navbar = () => {
    const [catVisibility, setCatVisibility] = useState(false);
    const [moreVisibility, setMoreVisibility] = useState(false);
    const [arrowDirection, setArrowDirection] = useState("down");

    const categories = Categories();
    const moreContent = MoreContent();

    //change home to anything else to see inner nav style
    let pageName = "home";
    let navClass = "navbar navbar-expand-lg";
    let shadowStyle = "";

    if (pageName === "home") {
    } else {
        navClass += " new-class";
        shadowStyle = " nav-2-props";
    }

    const toggleAllOff = () => {
        setCatVisibility(false);
        setMoreVisibility(false);
        setArrowDirection("up");
    }

    const toggleCatDropdown = () => {
        if (catVisibility) {
            setArrowDirection("down");
        } else {
            toggleAllOff();
        }
        setCatVisibility(!catVisibility);
    }

    const toggleMoreDropdown = () => {
        if (moreVisibility) {
            setArrowDirection("down");
        } else {
            toggleAllOff();
        }
        setMoreVisibility(!moreVisibility);
    }
    return (
        <div>
            <nav className={navClass}>
                <div className="container-fluid">
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#sideMenu" aria-controls="#sideMenu" area-expanded="false">
                        <span>
                            <img src={require('../../assets/images/burger-menu-toggle.png')} alt="burger-menu-toggle" />
                        </span>
                    </button>
                    <div className="side-menu collapse" id="sideMenu">
                        <div className="side-menu-header">
                            <i data-bs-toggle="collapse" data-bs-target="#sideMenu" aria-controls="#sideMenu" area-expanded="false"><img src={require('../../assets/images/close-icon.png')} alt="close" /></i>
                        </div>
                        <div className="side-menu-body">
                            <ul className="side-menu-list">
                                <li><a href="https://www.freepik.com/popular-vectors">Vectors</a></li>
                                <li><a href="https://www.freepik.com/popular-photos">Photos</a></li>
                                <li><a href="https://www.freepik.com/popular-psd">PSD</a></li>
                                <li>
                                    <a href="https://www.freepik.com/popular-psd">3D</a>
                                    <button className="btn btn-new">NEW</button>
                                </li>
                                <li><a href="https://www.freepik.com/popular-psd">Fonts</a></li>
                                <li className='side-cat-list' onClick={toggleCatDropdown}>
                                    <a>Categories</a>
                                    <i className={"bi bi-caret-" + arrowDirection + "-fill"}></i>
                                </li>
                                {catVisibility ? <div className={"side-drop-list" + shadowStyle}>
                                    {categories.map((category, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={category.url}>{category.name}</a>
                                            </li>
                                        )
                                    })}
                                </div> : null}
                                <li><a href="https://www.freepik.com/popular-psd">Collections</a></li>
                                <li className='side-more-list' onClick={toggleMoreDropdown} >
                                    <a>More</a>
                                    <i className={"bi bi-caret-" + arrowDirection + "-fill"}></i>
                                </li>
                                {moreVisibility ? <div className={"side-drop-list" + shadowStyle}>
                                    <ul>
                                        <h4>PROJECTS</h4>
                                        <div className="more-items">
                                            {moreContent[0]['projects'].map((item, idx) => {
                                                return (
                                                    <a href={item.url} key={idx}>
                                                        <li>
                                                            <h5>{item.name}</h5>
                                                            <h6>{item.desc}</h6>
                                                        </li>
                                                    </a>
                                                )
                                            })}

                                        </div>
                                    </ul>
                                    <ul>
                                        <h4>PRO SOLUTIONS</h4>
                                        <div className="more-items">
                                            {moreContent[1]['pro_solutions'].map((item, idx) => {
                                                return (
                                                    <a href={item.url} key={idx}>
                                                        <li>
                                                            <h5>{item.name}</h5>
                                                            <h6>{item.desc}</h6>
                                                        </li>
                                                    </a>
                                                )
                                            })}

                                        </div>
                                    </ul>
                                    <ul>
                                        <h4>TOOLS</h4>
                                        <div className="more-items">
                                            {moreContent[2]['tools'].map((item, idx) => {
                                                return (
                                                    <a href={item.url} key={idx}>
                                                        <li>
                                                            <h5>{item.name}</h5>
                                                            <h6>{item.desc}</h6>
                                                        </li>
                                                    </a>
                                                )
                                            })}
                                        </div>
                                    </ul>
                                    <ul>
                                        <h4>APPS AND PLUGINS</h4>
                                        <div className="more-items">
                                            {moreContent[3]['apps_and_plugins'].map((item, idx) => {
                                                return (
                                                    <a href={item.url} key={idx}>
                                                        <li>
                                                            <h5>{item.name}</h5>
                                                            <h6>{item.desc}</h6>
                                                        </li>
                                                    </a>
                                                )
                                            })}

                                        </div>
                                    </ul>
                                </div> : null}
                                <li><a href="https://www.freepik.com/popular-psd">Sell content</a></li>
                                <li><a className='pricing-color' href="https://www.freepik.com/popular-psd">Pricing</a></li>


                            </ul>
                        </div>
                    </div>
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
                                        <button className="btn btn-new">NEW</button>
                                    </li>
                                    <li><a href="https://www.freepik.com/popular-psd">Fonts</a></li>
                                    <li onClick={toggleCatDropdown}>
                                        <a href='#'>Categories
                                            <i className={"bi bi-caret-" + arrowDirection + "-fill"}></i>
                                        </a>
                                        {catVisibility ? <div className={"cat-drop-list" + shadowStyle}>
                                            {categories.map((category, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href={category.url}>{category.name}</a>
                                                    </li>
                                                )
                                            })}
                                        </div> : null}

                                    </li>
                                    {(catVisibility && pageName === "home") ? <i className="bi bi-caret-down-fill arrow-down-cat "></i> : null}


                                    <li><a href="https://www.freepik.com/popular-psd">Collections</a></li>
                                    <li onClick={toggleMoreDropdown}>
                                        <a href='#'>More
                                            <i className={"bi bi-caret-" + arrowDirection + "-fill"}></i>
                                        </a>
                                        {moreVisibility ? <div className={"more-drop-list" + shadowStyle}>
                                            <ul>
                                                <h4>PROJECTS</h4>
                                                <div className="more-items">
                                                    {moreContent[0]['projects'].map((item, idx) => {
                                                        return (
                                                            <a href={item.url} key={idx}>
                                                                <li>
                                                                    <h5>{item.name}</h5>
                                                                    <h6>{item.desc}</h6>
                                                                </li>
                                                            </a>
                                                        )
                                                    })}

                                                </div>
                                            </ul>
                                            <ul>
                                                <h4>PRO SOLUTIONS</h4>
                                                <div className="more-items">
                                                    {moreContent[1]['pro_solutions'].map((item, idx) => {
                                                        return (
                                                            <a href={item.url} key={idx}>
                                                                <li>
                                                                    <h5>{item.name}</h5>
                                                                    <h6>{item.desc}</h6>
                                                                </li>
                                                            </a>
                                                        )
                                                    })}

                                                </div>
                                            </ul>
                                            <ul>
                                                <h4>TOOLS</h4>
                                                <div className="more-items">
                                                    {moreContent[2]['tools'].map((item, idx) => {
                                                        return (
                                                            <a href={item.url} key={idx}>
                                                                <li>
                                                                    <h5>{item.name}</h5>
                                                                    <h6>{item.desc}</h6>
                                                                </li>
                                                            </a>
                                                        )
                                                    })}
                                                </div>
                                            </ul>
                                            <ul>
                                                <h4>APPS AND PLUGINS</h4>
                                                <div className="more-items">
                                                    {moreContent[3]['apps_and_plugins'].map((item, idx) => {
                                                        return (
                                                            <a href={item.url} key={idx}>
                                                                <li>
                                                                    <h5>{item.name}</h5>
                                                                    <h6>{item.desc}</h6>
                                                                </li>
                                                            </a>
                                                        )
                                                    })}

                                                </div>
                                            </ul>
                                        </div> : null}

                                    </li>
                                    {(moreVisibility && pageName === "home") ? <i className="bi bi-caret-down-fill arrow-down-more "></i> : null}

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
                            <button className="signup-btn">Sign up</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </div >
    )
}

export default Navbar
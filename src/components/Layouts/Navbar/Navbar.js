import React, { useState } from 'react';
import './nav-bar.scss';

import Categories from '../../../utils/Categories';
import MoreContent from '../../../utils/MoreContent';

const Navbar = (props) => {
    const [catVisibility, setCatVisibility] = useState(false);
    const [moreVisibility, setMoreVisibility] = useState(false);
    const [sideVisibility, setSideVisibility] = useState("");
    const [arrowDirectionCat, setarrowDirectionCat] = useState("down");
    const [arrowDirectionMore, setarrowDirectionMore] = useState("down");
    const categories = Categories();
    const moreContent = MoreContent();

    //change home to anything else to see inner nav style
    let pageName = props.page;
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
    }
    const toggleMoreOff = () => {
        setMoreVisibility(false);
        setarrowDirectionMore("up");
    }
    const toggleCatOff = () => {
        setCatVisibility(false);
        setarrowDirectionCat("up");
    }

    const toggleCatDropdown = () => {
        if (catVisibility) {
            setarrowDirectionCat("down");
        } else {
            toggleCatOff();
            toggleAllOff();
        }
        setCatVisibility(!catVisibility);
    }
    //toggle side visibility
    const toggleSide = () => {
        setSideVisibility(sideVisibility === "" ? "show" : "");
    }

    const toggleMoreDropdown = () => {
        if (moreVisibility) {
            setarrowDirectionMore("down");
        } else {
            toggleAllOff();
            toggleMoreOff();
        }
        setMoreVisibility(!moreVisibility);
    }
    return (
        <div>
            <nav className={navClass}>
                <div className="container-fluid">
                    <button className="navbar-toggler" >
                        <span>
                            <img src={require('../../../assets/images/navbar/burger-menu-toggle.png')} alt="burger-menu-toggle" onClick={toggleSide} />
                        </span>
                    </button>
                    <div className={`side-menu collapse ${sideVisibility}`} id="sideMenu">
                        <div className="side-menu-header" onClick={toggleSide}>
                            <i ><img src={require('../../../assets/images/navbar/close-icon.png')} alt="close" /></i>
                        </div>
                        <div className="side-menu-body">
                            <ul className="side-menu-list">
                                <li><a href="/">Vectors</a></li>
                                <li><a href="/">Photos</a></li>
                                <li><a href="/">PSD</a></li>
                                <li>
                                    <a href="/">3D</a>
                                    <button className="btn btn-new">NEW</button>
                                </li>
                                <li><a href="/">Fonts</a></li>
                                <li className='side-cat-list' onClick={toggleCatDropdown}>
                                    <a>Categories</a>
                                    <i className={"bi bi-caret-" + arrowDirectionCat + "-fill"}></i>
                                </li>
                                {catVisibility ? <div className={"side-drop-list-cat" + shadowStyle}>
                                    {categories.map((category, index) => {
                                        return (
                                            <li key={index}>
                                                <a href={category.url}>{category.name}</a>
                                            </li>
                                        )
                                    })}
                                </div> : null}
                                <li><a href="/">Collections</a></li>
                                <li className='side-more-list' onClick={toggleMoreDropdown} >
                                    <a>More</a>
                                    <i className={"bi bi-caret-" + arrowDirectionMore + "-fill"}></i>
                                </li>
                                {moreVisibility ? <div className={"side-drop-list-more" + shadowStyle}>
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
                                <li><a href="/">Sell content</a></li>
                                <li><a className='pricing-color' href="/">Pricing</a></li>


                            </ul>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse">
                        <a href="/">
                            <img className="nav-logo" src={require('../../../assets/images/navbar/freepik-no_bg.png')} alt="logo" />
                        </a>
                        <div className="nav-menus">
                            <div className="nav-menu">
                                <ul>
                                    <li><a href="/">Vectors</a></li>
                                    <li><a href="/">Photos</a></li>
                                    <li><a href="/">PSD</a></li>
                                    <li>
                                        <a href="/">3D</a>
                                        <button className="btn btn-new">NEW</button>
                                    </li>
                                    <li><a href="/">Fonts</a></li>
                                    <li onClick={toggleCatDropdown}>
                                        <a href='#'>Categories
                                            <i className={"bi bi-caret-" + arrowDirectionCat + "-fill"}></i>
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


                                    <li><a href="/">Collections</a></li>
                                    <li onClick={toggleMoreDropdown}>
                                        <a href='#'>More
                                            <i className={"bi bi-caret-" + arrowDirectionMore + "-fill"}></i>
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
                                    <li><a href='/'>Sell Content</a></li>
                                    <li><a className="pricing-color" href='/'>Pricing</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-menu-user">
                    <ul>
                        <li>
                            <a className='login-link' href="/">Log in </a>
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
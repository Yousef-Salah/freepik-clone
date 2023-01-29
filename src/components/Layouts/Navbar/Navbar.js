import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./nav-bar.scss";

import Categories from "../../../utils/Categories";
import MoreContent from "../../../utils/MoreContent";

const Navbar = (props) => {

	const [catVisibility, setCatVisibility] = useState(false);
	const [moreVisibility, setMoreVisibility] = useState(false);
	const [sideVisibility, setSideVisibility] = useState("");
	const [arrowDirectionCat, setarrowDirectionCat] = useState("down");
	const [arrowDirectionMore, setarrowDirectionMore] = useState("down");
	const [pageName, setPageName] = useState("");
	const [loaded, setLoaded] = useState(false);
	const categories = Categories();
	const moreContent = MoreContent();
	const navItems = [
		{ name: "Vectors", link: "/search/vectors", new: false },
		{ name: "Photos", link: "/search/popular-photos", new: false },
		{ name: "PSD", link: "/search/popular-psd", new: false },
		{ name: "3D", link: "/3d-models", new: true },
		{ name: "Fonts", link: "/fonts", new: false },
		{ name: "Categories", link: null, new: false },
		{ name: "Collections", link: "/collections", new: false },
		{ name: "More", link: null, new: false },
	];

	let navClass = "navbar navbar-expand-lg";
	let shadowStyle = "";

	useEffect(() => {
		setPageName(props.page);
		setLoaded(true);
	}, [props.page]);

	if (pageName === "home") {
	} else if (pageName === "login" || pageName === "signup") {
		navClass += " hide-nav";
	} else {
		navClass += " new-class";
		shadowStyle = " nav-2-props";
	}

	const toggleAllOff = () => {
		setCatVisibility(false);
		setMoreVisibility(false);
	};
	const toggleMoreOff = () => {
		setMoreVisibility(false);
		setarrowDirectionMore("up");
	};
	const toggleCatOff = () => {
		setCatVisibility(false);
		setarrowDirectionCat("up");
	};

	const toggleCatDropdown = () => {
		if (catVisibility) {
			setarrowDirectionCat("down");
		} else {
			toggleCatOff();
			toggleAllOff();
		}
		if (arrowDirectionMore === "up") {
			setarrowDirectionMore("down");
		}
		setCatVisibility(!catVisibility);
	};
	const toggleSide = () => {
		setSideVisibility(sideVisibility === "" ? "show" : "");
	};

	const toggleMoreDropdown = () => {
		if (moreVisibility) {
			setarrowDirectionMore("down");
		} else {
			toggleAllOff();
			toggleMoreOff();
		}
		if (arrowDirectionCat === "up") {
			setarrowDirectionCat("down");
		}
		setMoreVisibility(!moreVisibility);
	}

	return (
		<>
			{loaded && (
				<div className={`nav-wrapper ${pageName === "home" ? "" : "other-class"}`}>
					<nav className={navClass}>
						<div className="container-fluid">
							<button className="navbar-toggler">
								<span>
									<img
										src={"/assets/images/navbar/burger-menu-toggle.png"}
										alt="burger-menu-toggle"
										onClick={toggleSide}
									/>
								</span>
							</button>
							<div className={`side-menu collapse ${sideVisibility}`} id="sideMenu">
								<div className="side-menu-header" onClick={toggleSide}>
									<i>
										<img
											src={"/assets/images/navbar/close-icon.png"}
											alt="close"
										/>
									</i>
								</div>
								<div className="side-menu-body">
									<ul className="side-menu-list">
										<li>
											<div className="anchor-rep">
												<Link
													onClick={toggleSide}
													className="anchor-rep"
													to="/search/vectors"
												>
													Vectors
												</Link>
											</div>
										</li>
										<li>
											<div className="anchor-rep">
												<Link
													onClick={toggleSide}
													className="anchor-rep"
													to="/search/popular-photos"
												>
													Photos
												</Link>
											</div>
										</li>
										<li>
											<div className="anchor-rep">
												<Link
													onClick={toggleSide}
													className="anchor-rep"
													to="/search/popular-psd"
												>
													PSD
												</Link>
											</div>
										</li>
										<li>
											<div className="anchor-rep">
												<Link
													onClick={toggleSide}
													className="anchor-rep"
													to="/3d-models"
												>
													3D
												</Link>
											</div>
											<button className="btn btn-new">NEW</button>
										</li>
										<li>
											<div className="anchor-rep">
												<Link
													onClick={toggleSide}
													className="anchor-rep"
													to="/fonts"
												>
													Fonts
												</Link>
											</div>
										</li>
										<li className="side-cat-list" onClick={toggleCatDropdown}>
											<div className="anchor-rep">Categories</div>
											<i
												className={"bi bi-caret-" + arrowDirectionCat + "-fill"}
											></i>
										</li>
										{catVisibility ? (
											<div className={"side-drop-list-cat" + shadowStyle}>
												{categories.map((category, index) => {
													return (
														<li key={index}>
															<Link className="anchor-rep" to={category.url}
																onClick={toggleSide}
															>
																{category.name}
															</Link>
														</li>
													);
												})}
											</div>
										) : null}
										<li>
											<div className="anchor-rep">
												<Link
													onClick={toggleSide}
													className="anchor-rep"
													to="/collections"
												>
													Collections
												</Link>
											</div>
										</li>
										<li className="side-more-list" onClick={toggleMoreDropdown}>
											<div className="anchor-rep">More</div>
											<i
												className={"bi bi-caret-" + arrowDirectionMore + "-fill"}
											></i>
										</li>
										{moreVisibility ? (
											<div className={"side-drop-list-more" + shadowStyle}>
												{moreContent.map((item, index) => {
													return (
														<ul key={index}>
															<h4>{Object.keys(item)[0].toUpperCase()}</h4>
															<div className="more-items">
																{item[Object.keys(item)].map(
																	(innerItem, inneridx) => {
																		return (
																			<a href={innerItem.url} key={inneridx}>
																				<li>
																					<h5>{innerItem.name}</h5>
																					<h6>{innerItem.desc}</h6>
																				</li>
																			</a>
																		);
																	}
																)}
															</div>
														</ul>
													);
												})}
											</div>
										) : null}
										<li>
											<div className="anchor-rep">
												<a href="https://contributor.freepik.com/">Sell content</a>
											</div>
										</li>
										<li>
											<div className="pricing-color">
												<Link to="/pricing">Pricing</Link>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className="collapse navbar-collapse">
								<div className="anchor-rep">
									<Link to="/">
										<img
											className="nav-logo"
											src={"/assets/images/navbar/freepik-no_bg.png"}
											alt="logo"
										/>
									</Link>
								</div>
								<div className="nav-menus">
									<div className="nav-menu">
										<ul>
											{navItems.map((item, index) => {
												return (
													<>
														{item.link !== null ? (
															<li key={index}>
																{item.link !== null ? (
																	<Link className="anchor-rep" to={item.link}>
																		{item.name}
																	</Link>
																) : null}
																{item.new ? (
																	<button className="btn btn-new">NEW</button>
																) : null}
															</li>
														) : (
															<>
																{item.name === "More" ? (
																	<>
																		<li onClick={toggleMoreDropdown} key={index}>
																			<div className="anchor-rep">
																				{item.name}
																				<i
																					className={
																						"bi bi-caret-" +
																						arrowDirectionMore +
																						"-fill"
																					}
																				></i>
																			</div>
																			{moreVisibility ? (
																				<div
																					className={"more-drop-list" + shadowStyle}
																				>
																					{moreContent.map((item, index) => {
																						return (
																							<ul key={index}>
																								<h4>
																									{Object.keys(
																										item
																									)[0].toUpperCase()}
																								</h4>
																								<div className="more-items">
																									{item[Object.keys(item)].map(
																										(innerItem, inneridx) => {
																											return (
																												<a
																													href={innerItem.url}
																													key={inneridx}
																												>
																													<li>
																														<h5>
																															{innerItem.name}
																														</h5>
																														<h6>
																															{innerItem.desc}
																														</h6>
																													</li>
																												</a>
																											);
																										}
																									)}
																								</div>
																							</ul>
																						);
																					})}
																				</div>
																			) : null}
																		</li>
																		{moreVisibility && pageName === "home" ? (
																			<i className="bi bi-caret-down-fill arrow-down-more "></i>
																		) : null}
																	</>
																) : item.name === "Categories" ? (
																	<>
																		<li onClick={toggleCatDropdown} key={index}>
																			<div className="anchor-rep">
																				{item.name}
																				<i
																					className={
																						"bi bi-caret-" +
																						arrowDirectionCat +
																						"-fill"
																					}
																				></i>
																			</div>
																			{catVisibility ? (
																				<div
																					className={"cat-drop-list" + shadowStyle}
																				>
																					{categories.map((category, index) => {
																						return (
																							<>
																								<li key={index}>
																									<Link
																										className="anchor-rep"
																										to={category.url}
																									>
																										{category.name}
																									</Link>
																								</li>
																							</>
																						);
																					})}
																				</div>
																			) : null}
																		</li>
																		{catVisibility && pageName === "home" ? (
																			<i className="bi bi-caret-down-fill arrow-down-cat "></i>
																		) : null}
																	</>
																) : null}
															</>
														)}
													</>
												);
											})}
										</ul>
									</div>
									<div className="pricing-nav">
										<ul>
											<li>
												<div className="anchor-rep">
													<a href="https://contributor.freepik.com/">
														Sell content
													</a>
												</div>
											</li>
											<li>
												<Link to="/pricing">
													<div className="anchor-rep pricing-color">Pricing</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="nav-menu-user">
							<ul>
								<li>
									<div className="login-link anchor-rep">
										<Link to="/login">Login</Link>
									</div>
								</li>
								<li>
									<button className="signup-btn">
										<Link to="/signup">Sign up</Link>
									</button>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			)}
		</>
	);
};

export default Navbar;

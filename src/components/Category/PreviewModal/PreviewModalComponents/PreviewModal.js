import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SponsoredBy from "../../../Layouts/SponsoredBy/SponsoredBy";
import Trendingphotos from "../../../Home/TrendingCategories/Trendingphotos";
import "../preview-modal.css";
const PreviewModal = (props) => {

	const [visibility, setVisibility] = useState("");
	const [loaded, setLoaded] = useState(false);
	const buttonHandler = props.buttonHandler;
	console.log(props.data);
	const exitButtonHandler = (e) => {
		e.preventDefault();
		setVisibility("d-none");
		document.body.style.overflow = "visible";
		buttonHandler();
	}

	useEffect(() => {
		document.body.style.overflow = "hidden";
	})
	useEffect(() => {
		setLoaded(true);
	}, [props.data])

	// ! hating web design
	// * I am not a web designer
	// + I am not a web designer
	// ? I am not a web designer		

	return (
		<div id="preview-modal" className={visibility}>
			{loaded && (
				<div className="container-fluid">
					<div className="row">
						<div className="col-1 d-flex justify-content-center align-items-center">
							<Link to={"#"} className="position-absolute d-flex justify-content-center align-items-center bg-fill-animation">
								<i className="fa-solid fa-angle-left"></i>
							</Link>
						</div>
						<div className="col-10" id="main-content">
							<div className="img-content">
								<div className="img-wrapper">
									<img src={props.data.img_og} alt={props.data.title} />
								</div>
								<div className="img-info">
									<button className="download-btn">
										<i class="bi bi-download"></i>
										<span>Download</span>
									</button>
									<div className="info-row flex-div">
										<i class="bi bi-shield-check"></i>
										<h3>Free License</h3>
										<a href="https://google.com" >More info</a>
									</div>
									<div className="info-row flex-div">
										<i class="bi bi-pen"></i>
										<h3>Attribution required?</h3>
										<a href="https://google.com" >How to Attribute</a>
									</div>
									<div className="info-row flex-div">
										<i class="bi bi-file-earmark"></i>
										<h3>File Type: </h3>
										<h3 className="file-type"> {props.data.file_type.toUpperCase()}</h3>
										<a href="https://google.com">How to edit?</a>
									</div>
								</div>


							</div>
							<div className="author-media">
								<div className="author-profile">
									<div className="author-img">
										<img src={props.data.authour_image} alt={props.data.author} />
									</div>
									<div className="auth-name">
										<h5>{props.data.author}</h5>
										<h6>{props.data.authour_assets} assets</h6>
									</div>
									<div className="media-btn folow">
										<h5>Folow</h5>
									</div>
								</div>
								<div className="media-share">
									<div className="media-btn share">
										<i class="bi bi-share"></i>
										<h5>Share</h5>
									</div>
									<div className=" media-btn collect">
										<i class="bi bi-bookmark"></i>
										<h5>Collect</h5>
									</div>
									<div className="media-btn like">
										<i class="bi bi-heart"></i>
										<h5>Like</h5>
									</div>
									{/* pintrest */}
									<div className="pint media-btn">
										<i class="bi bi-pinterest"></i>
									</div>
								</div>
							</div>
							<div className="img-title">
								<h2>{(props.data.premium ? "Premium " : "Free ") + props.data.title[0].toUpperCase() + props.data.title.slice(1, props.data.title.length) + " " + props.data.ethinicity + " " + props.data.style}</h2>
							</div>
							<div className="img-more-desc">
								<h4>Related Tags</h4>
								<div className="related-tags">
									{props.data.related_tags?.map(tag => {
										return (
											<Link to={"/search/" + tag} className="img-rtag">
												<i class="bi bi-search"></i>
												{tag}</Link>
										)
									}
									)}
									<Link to={"/search/" + props.data.title} className="img-rtag">
										<i class="bi bi-search"></i>
										28+</Link>
								</div>

								<h4 >More from the author</h4>

								<div className="au-images-1">
									{Trendingphotos().map((item, index) => {
										return (
											<div className="au-img-wrapper" key={index}>
												<img src={require(`../../../../${item.image}`)} alt="title" />
											</div>
										)
									}
									)}
								</div>
							</div>

							<SponsoredBy />
							<br />
							<br />

							<h4 >You Might Also Like</h4>
							<div className="au-images-2">
								<div className="au-img-wrapper">
									<img src={props.data.img_thumb} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={props.data.img_thumb} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={props.data.img_thumb} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={props.data.img_thumb} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={props.data.img_thumb} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={props.data.img_thumb} alt="title" />
								</div>
							</div>

						</div>
						<div className="col-1 d-flex justify-content-center align-items-center">
							<Link to={""} onClick={exitButtonHandler} id="exit-btn" className="position-absolute d-flex justify-content-center align-self-start align-items-center bg-fill-animation">
								<i className="fa-solid fa-xmark"></i>
							</Link>
							<Link to={""} className="position-absolute d-flex justify-content-center align-items-center bg-fill-animation">
								<i className="fa-solid fa-angle-right opacity-100"></i>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default PreviewModal;
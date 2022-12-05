import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SponsoredBy from "../../../Layouts/SponsoredBy/SponsoredBy";
import TrendingCategories from "../../../Home/TrendingCategories/TrendingCategories";
const PreviewModal = (props) => {

	const [visibility, setVisibility] = useState("");
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

	// ! hating web design
	return (
		<div id="preview-modal" className={visibility}>
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
								<button className="download-btn">Download</button>
								<h3>File type: {props.data.file_type}</h3>
								<h3>Price: {props.data.premium ? "Premium" : "Free"}</h3>
								<h3>likes: {props.data.likes}</h3>
								<h3>{props.data.title}</h3>
								<p>{props.data.category}</p>
							</div>
						</div>
						<h4>Related Tags</h4>
						<div className="related-tags">
							{props.data.related_tags?.map(tag => {
								return (
									<Link to={"/search/" + tag} className="tag">{tag}</Link>
								)
							}
							)}
						</div>
						{/* <TrendingCategories headingDisplay={false} /> */}

						<SponsoredBy />
						{/* <TrendingCategories headingDisplay={false} /> */}
						{props.children}
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
		</div>
	);
}

export default PreviewModal;
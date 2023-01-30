import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SponsoredBy from "../../../Layouts/SponsoredBy/SponsoredBy";
import Trendingphotos from "../../../Home/TrendingCategories/Trendingphotos";
import "../preview-modal.css";
const PreviewModal = (props) => {

	const [visibility, setVisibility] = useState("");
	const [loaded, setLoaded] = useState(false);
	const buttonHandler = props.buttonHandler;
	const exitButtonHandler = (e) => {
		e.preventDefault();
		setVisibility("d-none");
		buttonHandler();
	}

    const navigate = useNavigate();

    // TODO:: check for correctance of adding new element to DOM
    const downloadImage = async () => {

        if( !props.data.premium ) {  
            const image = await fetch(props.data.img_og);       // fetching the data from out source link
            const imageBlog = await image.blob();               // convert fetched data to be readable data
            const imageURL = URL.createObjectURL(imageBlog);    // create url that represents the fetched image
          
            const link = document.createElement('a');           // create `a` element to use it to download the image
            link.href = imageURL;
            link.download = props.data.title;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            return navigate('/login');
        }
    }
      

	useEffect(() => {
		setLoaded(true);
	}, [props.data])

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
									<button className="download-btn" onClick={downloadImage}>
										<i className="bi bi-download"></i>
										<span>Download</span>
									</button>
									<div className="info-row flex-div">
										<i className="bi bi-shield-check"></i>
										<h3>Free License</h3>
										<a href="https://google.com" >More info</a>
									</div>
									<div className="info-row flex-div">
										<i className="bi bi-pen"></i>
										<h3>Attribution required?</h3>
										<a href="https://google.com" >How to Attribute</a>
									</div>
									<div className="info-row flex-div">
										<i className="bi bi-file-earmark"></i>
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
										<i className="bi bi-share"></i>
										<h5>Share</h5>
									</div>
									<div className=" media-btn collect">
										<i className="bi bi-bookmark"></i>
										<h5>Collect</h5>
									</div>
									<div className="media-btn like">
										<i className="bi bi-heart"></i>
										<h5>Like</h5>
									</div>
									{/* pintrest */}
									<div className="pint media-btn">
										<i className="bi bi-pinterest"></i>
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
												<i className="bi bi-search"></i>
												{tag}</Link>
										)
									}
									)}
									<Link to={"/search/" + props.data.title} className="img-rtag">
										<i className="bi bi-search"></i>
										28+</Link>
								</div>

								<h4 >More from the author</h4>

								<div className="au-images-1">
									{Trendingphotos().map((item, index) => {
										return (
											<div className="au-img-wrapper" key={index}>
												<img src={item.image} alt="title" />
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
									<img src={`/assets/images/thumb_images/${props.data.img_path}`} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={`/assets/images/thumb_images/${props.data.img_path}`} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={`/assets/images/thumb_images/${props.data.img_path}`} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={`/assets/images/thumb_images/${props.data.img_path}`} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={`/assets/images/thumb_images/${props.data.img_path}`} alt="title" />
								</div>
								<div className="au-img-wrapper">
									<img src={`/assets/images/thumb_images/${props.data.img_path}`} alt="title" />
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
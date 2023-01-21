import { Link } from "react-router-dom";
import "./Searchimgcard.css";
const premiumicon = ({ Cardphoto }) => {
	if (Cardphoto.premium == true) {
		return <i className="fa-sharp fa-solid fa-crown" id="premium-icon"></i>;
	} else return "";
}; //for the icon inside the hover
const premiumimg = ({ Cardphoto }) => {
	if (Cardphoto.premium == true) {
		return <i className="fa-sharp fa-solid fa-crown" id="premium-img"></i>;
	} else return "";
}; //for the icon outside the hover

const Searchimgcard = ({ Cardphoto }) => {
	return (
		<div className="inner-search-card" id="search-card">
			<nav className="testsearchcard">
				{premiumimg({ Cardphoto })}
				{/* commented Link to work on modal */}
				{/* <Link to={"/"}> */}
				<img
					className="searchcard-img"
					src={`/assets/images/thumb_images/${Cardphoto.img_path}`}
					alt={Cardphoto.title}
				/>
				{/* </Link> */}
				<nav className="Cardphoto">
					{premiumicon({ Cardphoto })}
					<p className="searchcard-desc">{Cardphoto.title}</p>
					<Link to={Cardphoto.authour_assets}>
						<img
							className="authour"
							id="searchauthor-img"
							src={Cardphoto.authour_image}
							alt={Cardphoto.title}
						/>
						<p className="authour" id="searchauthor-name">
							{Cardphoto.author}
						</p>
					</Link>
				</nav>
				<div className="searchcard">
					<p className="likes-no">{Cardphoto.likes}</p>
					<div className="searchcard-buttons">
						<button
							type="button"
							className="btn searchcard-button"
							id="like-btn"
						>
							<span className="bi bi-heart"></span>
							{/* <p>Like</p> */}
						</button>
						<button
							type="button"
							className="btn searchcard-button"
							id="collect-btn"
						>
							<span className="bi bi-folder-plus"></span>
							{/* <p>Collect</p> */}
						</button>
						<button
							type="button"
							className="btn searchcard-button"
							id="pintrest-btn"
						>
							<span className="bi bi-pinterest"></span>
							{/* <p>Save</p> */}
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Searchimgcard;

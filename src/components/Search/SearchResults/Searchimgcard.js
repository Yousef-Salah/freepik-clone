import { Link } from "react-router-dom";
import "./Searchimgcard.css";
const Searchimgcard = ({ Cardphoto }) => {
  return (
    <div className="container-fluid" id="search-card">
        <Link to={"/"}>
          <img
            className="searchcard-img"
            src={Cardphoto.img_thumb}
            alt={Cardphoto.title}
          />
        </Link>
      <div className="overlay" id="searchcard">
        <p className="descreption">{Cardphoto.desc}</p>
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
        <p className="likes-no">{Cardphoto.likes}</p>
        <div className="searchcard-buttons ">
          <button className="searchcard-button" id="btn like-btn">
            <span className="bi bi-heart"></span>
          </button>
          <button className="searchcard-button" id="btn collect-btn">
            <span className="bi bi-folder-plus"></span>
          </button>
          <button className="searchcard-button" id="btn pintrest-btn">
            <span className="fa-brands fa-pinterest"></span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Searchimgcard;

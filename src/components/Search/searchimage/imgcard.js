import { Link } from "react-router-dom";
const searchimgcard = ({ Cardphoto }) => {
  <div className="container" id="search-photo-card">
    <p className="descreption">{Cardphoto.desc}</p>
    <h1 className="username">{Cardphoto.username}</h1>
    <Link to={Cardphoto.weburl}>
      <img
        className="searchimgcard"
        src={Cardphoto.image}
        alt={Cardphoto.title}
      />
    </Link>
  </div>;
};
export default searchimgcard;


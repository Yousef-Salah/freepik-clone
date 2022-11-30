import { Link } from "react-router-dom";
const Searchimgcard = ({ Cardphoto }) => {
  return (
    <div className="container" id="search-photo-card">
      <Link to={Cardphoto.imgurl}>
        <img
          className="searchimg-card"
          src={require(`../../../${Cardphoto.image}`)}
          alt={Cardphoto.title}
        />
      </Link>
      <div className="overlay">
        <p className="descreption">{Cardphoto.desc}</p>
        <Link to={Cardphoto.authour_assets}>
          <img
            className="searchimg-author"
            src={require(`../../../${Cardphoto.authour_image}`)}
            alt={Cardphoto.title}
          />
          <h1 className="author">{Cardphoto.author}</h1>
        </Link>
        <p className="likes-no">{Cardphoto.likes}</p>
        <button className="btn like-btn"><span className="bi bi-heart"></span></button>
        <button className="btn collect-btn"><span className="bi bi-folder-plus"></span></button>
        <button className="btn pintrest-btn"><span className="bi bi-pinterest"></span></button>

      </div>
    </div>
  );
};
export default Searchimgcard;

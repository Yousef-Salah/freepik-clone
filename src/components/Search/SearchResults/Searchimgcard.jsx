import React, { Link } from 'react-router-dom';
import './Searchimgcard.scss';

const premiumicon = ({Cardphoto}) => {
  if(Cardphoto.premium === true) {
    return (<i className="fa-sharp fa-solid fa-crown" id="premium-icon"> </i>);
  }

  return <> </>;
}

const premiumimg = ({ Cardphoto }) => {
  if (Cardphoto.premium === true) {
    return (<i className="fa-sharp fa-solid fa-crown" id="premium-img"> </i>);
  } 
  
  return <> </>;
}

const Searchimgcard = ({ Cardphoto }) =>  (
  <div className="inner-search-card" id="search-card">
    <nav className="testsearchcard">
      {premiumimg({ Cardphoto })}
      <img
        className="searchcard-img"
        src={`/assets/images/thumb_images/${Cardphoto.img_path}`}
        alt={Cardphoto.title}
      />
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
            <span className="bi bi-heart"> </span>
          </button>
          <button
            type="button"
            className="btn searchcard-button"
            id="collect-btn"
          >
            <span className="bi bi-folder-plus"> </span>
          </button>
          <button
            type="button"
            className="btn searchcard-button"
            id="pintrest-btn"
          >
            <span className="bi bi-pinterest"> </span>
          </button>
        </div>
      </div>
    </nav>
  </div>
);

export default Searchimgcard;

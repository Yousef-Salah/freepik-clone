import photo from "../../../assets/images/Join-section/community.png";
import './join-section.css';
const Join = () => {
    return (
        <div className="container" id="join-section">
            <div className="content">
                <p className="title" >
                    Join Freepik <strong>creator community</strong>
                </p>
                <p className="text">Behind every stock image there's a creative mind.You can also create content and sell it on Freepik</p>
                <a href="#" className="button" target="_blank" rel="noopener noreferrer">
                    Sell content
                </a>
            </div>
            <div className="photo">
                <img src={photo} alt="Join Freepik" loading="lazy"></img>
            </div>
        </div>
    );
}
export default Join
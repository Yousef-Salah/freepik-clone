
import './ImageCard.css';
const ImageCard = () => {
    return (
        <div className="circle-card row">
            <div className="column">
                <img src="./images/Internet-Vector.jpg" alt="Vectors" ></img>
                <p className="text" >Vectors</p>
            </div>
            <div className="column">
                <img src="./images/card-1.jpg" alt="lllustrations" ></img>
                <p className="text" >lllustrations</p>.
            </div>
            <div className="column">
                <img src="./images/Photos.jpg" alt="Photos" ></img>
                <p className="text" >Photos</p>
            </div>
            <div className="column">
                <img src="./images/templates.jpg" alt="Templates" ></img>
                <p className="text" >Templates</p>
            </div>
            <div className="column">
                <img src="./images/Fonts.jpg" alt="Fonts" ></img>
                <p className="text" >Fonts</p>
            </div>
            <div className="column">
                <img src="./images/Mockup.jpg" alt="Mockaups" ></img>
                <p className="text" >Mockaups</p>
            </div>
            <div className="column">
                <img src="./images/background.jpg" alt="Backgrounds" ></img>
                <p className="text" >Backgrounds</p>
            </div>
            <div className="column">
                <img src="./images/text-effect.jpg" alt="TextEffects" ></img>
                <p className="text" >TextEffects</p>
            </div>
        </div>
    );
}
export default ImageCard;
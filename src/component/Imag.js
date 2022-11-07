 import vector from "./images/Internet-Vector.jpg"
 import lllustrations from "./images/card-1.jpg"
 import photo from "./images/photo.jpg"
 import template from "./images/templates.jpg"
 import font from "./images/Fonts.jpg"
 import mockup from "./images/Mockup.jpg"
 import background from "./images/background.jpg"
 import textEffect from "./images/text-effect.jpg"
 import'./ImageCard.css';

 const ImageCard= () =>
{
  return(
    
<div className="row">
<div className="column">
  
<img src={vector} alt="Vectors" ></img>
<p className="text" >Vectors</p>
</div>
<div className="column">
<img src={lllustrations} alt="lllustrations" ></img>
  <p className="text" >lllustrations</p>
</div>
<div className="column">
<img src={photo} alt="Photos" ></img>
  <p className="text" >Photos</p>
</div>
<div className="column">
<img src={template} alt="Templates" ></img>
  <p className="text" >Templates</p>
</div>
<div className="column">
<img src={font} alt="Fonts" ></img>
  <p className="text" >Fonts</p>
</div>
<div className="column">
<img src={mockup} alt="Mockaups" ></img>
  <p className="text" >Mockaups</p>
</div>
<div className="column">
<img src={background} alt="Backgrounds" ></img>
  <p className="text" >Backgrounds</p>
</div>
<div className="column">
<img src={textEffect} alt="TextEffects" ></img>
  <p className="text" >TextEffects</p>
</div>
</div>
  );
}

export default ImageCard

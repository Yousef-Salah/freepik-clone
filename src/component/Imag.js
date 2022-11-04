 import vector from "./immm/Internet-Vector.jpg"
 import lllustrations from "./immm/card-1.jpg"
 import photo from "./immm/photo.jpg"
 import template from "./immm/templates.jpg"
 import font from "./immm/Fonts.jpg"
 import mockup from "./immm/Mockup.jpg"
 import background from "./immm/background.jpg"
 import textEffect from "./immm/text-effect.jpg"
 import'./Im.css';
const tt= () =>
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

export default tt

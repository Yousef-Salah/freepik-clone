import './Enhance.css';
/*import content from './Enhance/content.svg';
import license from './Enhance/license.svg';
import production from './Enhance/production.svg';
import ads from './Enhance/ads.svg';*/
const Enhance = () => {
    return (
      <div className="row row-cols-1 row-cols-md-4 "id="Enhance-container">
  <div className="col">
    <div className="card">
    <i className="fa-duotone fa-file"id="EnhanceSymbol"></i>
   
   
      <div className="card-body">
        <h5 className="card-title"id="symbolTitle">Full license</h5>
        <p className="card-text"id="symbolText">You can use any asset for commercial or personal use without attributing the author. High-quality photos, fonts, vector icons, stickers, and logos ready to use.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <i className="fa-light fa-crown"id="EnhanceSymbol"></i>
      <div className="card-body">
        <h5 className="card-title"id="symbolTitle">Premium content</h5>
        <p className="card-text"id="symbolText">Access to Freepik and Flaticon Premium content. Download exclusive editable images and more than 7.7MM vector icons, stickers, and logos.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <i className="fa-regular fa-repeat"id="EnhanceSymbol"></i>
      <div className="card-body">
        <h5 className="card-title"id="symbolTitle">New assets daily</h5>
        <p className="card-text"id="symbolText">Discover over 50K new editable assets daily carefully curated. That means 250K photos, fonts, icons, stickers, and logos per week. More than 1.25MM assets per month.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
    <i className="fa-light fa-bullhorn"id="EnhanceSymbol"></i>
      <div className="card-body">
        <h5 className="card-title"id="symbolTitle">Ad free</h5>
        <p className="card-text"id="symbolText">Focus on what matters with an ad-free interface and improve your browsing experience. Scroll through a screen of high-quality assets and select your best fit.</p>
      </div>
    </div>
  </div>
</div>
          
             
);
}
export default Enhance;
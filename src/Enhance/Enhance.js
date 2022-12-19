import './Enhance.css';
import file from '../Enhance/index.1.jpg';
import crown from '../Enhance/index.2.jpg';
import refresh from '../Enhance/index3.jpg';
import add from '../Enhance/index4.jpg';
const Enhance = () => {
  return (

    <div>
      <p className='Enhance-title'> Enhance your design process today</p>
      
      <div className="row row-cols-1 row-cols-md-4 " id="Enhance-container">
        <div className="col">
          <div className="enhance">
            <img src={file} class="card-img-top" id="Enhance-img" alt="file"></img>
            <div className="card-body">
              <h5 className="card-title" id="symbolTitle">Full license</h5>
              <p className="card-text" id="symbolText">You can use any asset for commercial or personal use without attributing the author. High-quality photos, fonts, vector icons, stickers, and logos ready to use.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="enhance">
            <img src={crown} class="card-img-top" id="Enhance-img" alt="crown"></img>
            <div className="card-body">
              <h5 className="card-title" id="symbolTitle">Premium content</h5>
              <p className="card-text" id="symbolText">Access to Freepik and Flaticon Premium content. Download exclusive editable images and more than 7.7MM vector icons, stickers, and logos.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="enhance">
            <img src={refresh} class="card-img-top" id="Enhance-img" alt="refresh"></img>
            <div className="card-body">
              <h5 className="card-title" id="symbolTitle">New assets daily</h5>
              <p className="card-text" id="symbolText">Discover over 50K new editable assets daily carefully curated. That means 250K photos, fonts, icons, stickers, and logos per week. More than 1.25MM assets per month.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="enhance">
            <img src={add} class="card-img-top" id="Enhance-img" alt="add"></img>
            <div className="card-body">
              <h5 className="card-title" id="symbolTitle">Ad free</h5>
              <p className="card-text" id="symbolText">Focus on what matters with an ad-free interface and improve your browsing experience. Scroll through a screen of high-quality assets and select your best fit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
export default Enhance;
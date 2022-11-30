import './creator-collection.css';

const CreatorCollection = () =>
{
    return   (
<section id='creator-collection-section' >
<div className='creator-collection-title'>
<h1>Unlock your inner creator</h1>
</div>
<div className='creator-collection-p'>
Get the inspiration you need with these collections carefully selected to boost your project’s engagement.
<button className='Explore-btn'>Explore</button>
<i className="fa-solid fa-arrow-right right-arrow"></i>
</div>
  <div className='row' >
    <div className='col col-lg-3 col-med-3  creator-collection-card'>
      <img src='creator-collection-img1.png' alt='...' />
    </div>

    <div className='col col-lg-3 col-med-3   creator-collection-card'>
      <img src='creator-collection-img2.png' alt='...' />
          </div>

    <div className='col col-lg-3 col-med-3  creator-collection-card'>
      <img src='creator-collection-img3.png' alt='...' />
    </div>
    <div className='col col-lg-3 col-med-3  creator-collection-card'>
      <img src='creator-collection-img4.png' alt='...' />
    </div>
  </div>
</section>
    );
    }

export default CreatorCollection;
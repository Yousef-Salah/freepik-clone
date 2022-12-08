import './creator-collection.css';

const CreatorCollection = () =>
{
    return   (
<>
  <div className='creator-collection-title'>
<h1>Unlock your inner creator</h1>
</div>
<div className='creator-collection-p'>
Get the inspiration you need with these collections carefully selected to boost your project's engagement.
<a href='http://localhost:3000/collections' className='Explore-btn'>Explore<i className="fa-solid fa-arrow-right right-arrow"></i></a>
</div>
      <div className="container" id="creator-collection">
      <div className="creator-collection-div">
      <img className="creator-collection-img1" src= 'creator-collection-img1.png' />
        <img className="creator-collection-img" src= 'creator-collection-img1.png' />
        <p className='creator-collection-text'>Breafast cupcake <p id = "resoursess">80 resources</p></p>
        
     </div>
     <div className="creator-collection-div">
      <img className="creator-collection-img1" src= 'creator-collection-img1.png' />
        <img className="creator-collection-img" src= 'creator-collection-img1.png' />
        <p className='creator-collection-text'>Breafast cupcake<p id = "resoursess">25 resources</p></p>
     </div> <div className="creator-collection-div">
      <img className="creator-collection-img1" src= 'creator-collection-img1.png' />
        <img className="creator-collection-img" src= 'creator-collection-img1.png' />
        <p className='creator-collection-text'>Breafast cupcake<p id = "resoursess">59 resources</p></p>
     </div> <div className="creator-collection-div">
      <img className="creator-collection-img1" src= 'creator-collection-img1.png' />
        <img className="creator-collection-img" src= 'creator-collection-img1.png' />
        <p className='creator-collection-text'>Breafast cupcake<p id = "resoursess">80 resources</p></p>
     </div>
    </div>

    </>

    );
    }

export default CreatorCollection;
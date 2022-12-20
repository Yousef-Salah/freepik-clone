import './creator-collection.css';



const CreatorCollectionTitle = () => {
    return (
        <>
        <div className='creator-collection-title'>
        <h1>Unlock your inner creator</h1>
      </div>
      <div className='creator-collection-p'>
        Get the inspiration you need with these collections carefully selected to boost your project's engagement.
        <a href='http://localhost:3000/collections' className='Explore-btn'>Explore<i className="fa-solid fa-arrow-right right-arrow"></i></a>
      </div>
        </>
    );
}




export default CreatorCollectionTitle;
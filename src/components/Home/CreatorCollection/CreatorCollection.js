import { CreatorCollectionList } from '../../../utils/CreatorCollectionList';
import './creator-collection.css';
import ExploreCard from './ExploreCard';

const CreatorCollection = () => {


  return (
    <>
      <div className='row collection-row'>

        {CreatorCollectionList.map((item) => {
          return (<div className='col-2 d-collection-col'>
            <div className="creator-collection-div">
              <img className="creator-collection-img1" src={item.link} />
              <img className="creator-collection-img" src={item.link} />
              <div className='row c-c-t-r'>
                <p className='creator-collection-text'>{item.ctext}</p>
                <p id="resoursess">{item.cresources}</p>

              </div>
            </div>
          </div>)
        })} <ExploreCard />
      </div>
      
    </>
  );
}

export default CreatorCollection;
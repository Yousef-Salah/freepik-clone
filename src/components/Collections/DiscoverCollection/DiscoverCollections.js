import { DiscoverCollectionList } from '../../../utils/DiscoverCollectionList';
import './discover-collections.css';
import React from 'react';

const DiscoverCollections = () => {
    return (
        <>
           


<div className='container-fluid discover-collection-container'>
                    <div className='row discover-collection-row'>
                    {DiscoverCollectionList.map((item) => {return (
                        <div className='col-3 discover-collection-col1'>
                        <div className='discover-collection-div'>
                            <div className='col-6'>
                                <div className='row discover-collection-row2'>
                                    <img src={item.link} id='discover-img1' />
                                </div>
                                <div className='row discover-collection-row3'>
                                    <img src={item.link2} id='discover-img2' />
                                </div>
                            </div>
                            <div className='col-6'>
                                <img src={item.link3} id='discover-img3' />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'> <p id='discover-para'>{item.discoverpara}</p> </div>
                            <div className='col-6'>
                                <div className="dropdown-div">
<button className="discover-dropDown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
<i class="bi bi-three-dots-vertical"></i></button>
<ul className="dropdown-menu">
<li><button className="dropdown-item" type="button">Share</button></li>
<li><button className="dropdown-item" type="button">Follow</button></li>
</ul>
</div></div>
                        </div>

                        <p id='discover-resources'>{item.discoverresource}</p>
                    </div>
           
)})}
                        
</div>
</div>








        </>
    )
}
export default DiscoverCollections;
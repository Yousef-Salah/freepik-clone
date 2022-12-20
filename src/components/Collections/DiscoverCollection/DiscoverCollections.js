import './discover-collections.css';
import React from 'react';

const DiscoverCollections = (props) => {
    return (
        <>
                        <div className='col discover-collection-col1'>
                            <div className='discover-collection-div'>
                                <div className='col-6'>
                                    <div className='row discover-collection-row2'>
                                        <img src='collection1.png' id='discover-img1' />
                                    </div>
                                    <div className='row discover-collection-row3'>
                                        <img src='collection2.png' id='discover-img2' />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <img src='collection3.png' id='discover-img3' />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'> <p id='discover-para'>3D lllustrations </p> </div>
                                <div className='col-6'><div class="dropdown">
                                    <button className="discover-dropDown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="bi bi-three-dots-vertical"></i></button>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" type="button">Share</button></li>
                                        <li><button className="dropdown-item" type="button">Follow</button></li>
                                    </ul>
                                </div></div>
                            </div>

                            <p id='discover-resources'>80 resources</p>
                        </div>


        </>
    )
}
export default DiscoverCollections;
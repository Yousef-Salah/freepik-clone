import React, { useState, useEffect } from 'react';
import './RelatedArticles.css';


const RelatedArticles = (props) => {
  return (
    <section className='container'>
        <div className='row'>
            <h2> Related Articles</h2>
        </div>
        <div className='row'>
            <a className='col-4 article p-3'>
                <img className='rounded mb-3' src='https://mediablog.cdnpk.net/sites/9/2021/12/120_Backgrounds_VideoCalls_Cover_1280x720_EN-1.jpg' alt='nothing' />
                <h3 className='fs-5 fw-semibold'>Video call backgrounds: change your meeting’s look</h3>
                <p className='fs-6 fw-lighter'>The year 2020 kept everyone separated. Even though many people thought that 2021 was going to be different,..</p>
            </a>
            <a className='col-4 article p-3'>
                <img className='rounded mb-3' src='https://mediablog.cdnpk.net/sites/9/2021/12/120_Backgrounds_VideoCalls_Cover_1280x720_EN-1.jpg' alt='nothing' />
                <h3 className='fs-5 fw-semibold'>Video call backgrounds: change your meeting’s look</h3>
                <p className='fs-6 fw-lighter'>The year 2020 kept everyone separated. Even though many people thought that 2021 was going to be different,..</p>
            </a>
            <a className='col-4 article p-3'>
                <img className='rounded mb-3' src='https://mediablog.cdnpk.net/sites/9/2021/12/120_Backgrounds_VideoCalls_Cover_1280x720_EN-1.jpg' alt='nothing' />
                <h3 className='fs-5 fw-semibold'>Video call backgrounds: change your meeting’s look</h3>
                <p className='fs-6 fw-lighter'>The year 2020 kept everyone separated. Even though many people thought that 2021 was going to be different,..</p>
            </a>
        </div>

    </section>
  );
}


{/* <div className='col-3 related-articles'>
<RelatedArticles title="Tips for choosing consistent images for your designs"
    heder="One of the fundamental elements of graphic design is consistency. No matter what article, design book, workshop,..."
    image={chosing} />
</div> */}
export default RelatedArticles;
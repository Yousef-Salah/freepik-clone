import React from 'react';
import './inner-creation.css';

const InnerCreation = () => {
  return (
    <div
      className='bg-image hover-overlay shadow-1-strong rounded'
    // rippleTag='div'
    // rippleColor='light'
    >
      <img src={require('../../../assets/images/inner photo/1.jpg')} alt="inner-photo" />
      <a href='#!'>
        <div className='mask'></div>
      </a>
    </div>
  );
}
export default InnerCreation
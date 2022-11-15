import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';

const Inner = () => {
  return (
    <MDBRipple
      className='bg-image hover-overlay shadow-1-strong rounded'
      rippleTag='div'
      rippleColor='light'
    >
      <img src={require('../../../assets/images/inner photo/1.jpg')} alt="inner-photo" />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
      </a>
    </MDBRipple>
  );
}
export default Inner
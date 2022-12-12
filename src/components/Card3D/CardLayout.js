import React from 'react'
import Card3D from './Card3D';

const CardLayout = () => {
  return (
    <div className='row row-cols-lg-7 row-cols-md-7 row-cols-xl-7 layout-3d'>
      <div className='col'>
        <Card3D/>
      </div><div className='col'>
        <Card3D/>
      </div><div className='col'>
        <Card3D/>
      </div><div className='col'>
        <Card3D/>
      </div><div className='col'>
        <Card3D/>
      </div><div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
      <div className='col'>
        <Card3D/>
      </div>
    </div>
  )
}

export default CardLayout;

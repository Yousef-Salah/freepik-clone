//

import './TagBar.css';
import Type from './type';
import Tag from './Tag';
import Filters from './Filters';
import $ from 'jquery'; 
import SideBar from './SideBar';

const TagBar=() =>{
let carouselWidth=$('.carousel-inner').scrollWidth;
let tagWidth=$('.carousel-item').width();
let scrollPosition=$('carousel-inner').width();
$('.carousel-control-next').on('click',function (){
 if(scrollPosition <(carouselWidth -(tagWidth*13))){ 
  scrollPosition=scrollPosition+tagWidth;
  $('.carousel-inner').animate({scrollLeft:scrollPosition},600)
}});
$('.carousel-control-prev').on('click',function (){
  if(scrollPosition > 0){ 
   scrollPosition=scrollPosition-tagWidth;
   $('.carousel-inner').animate({scrollLeft:scrollPosition},600)
 }});
    return(
        <div className="container-fluid bar">
        <div className='track'>

      {/*  <Filters/>
       <div id="carouselExampleInterval" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Type title="All images" pic='bx bxs-shapes' />
    </div>
    <div className="carousel-item">
    <Tag title="arrow"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    <div className="carousel-item">
    <Tag title="background"/>
    </div>
    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
    </button>*/}
    <SideBar/>
    <div className='flex ml-0'>
         <Type title="Photos" pic='bi bi-image'/>
          <Type title="PSD" pic='bi bi-filetype-psd' />
          <Type title="All images" pic='bx bxs-shapes' />
          <Tag title="arrow"/>
          <Tag title="background"/>
          <Tag title="business card"/>
          <Tag title="certificate"/>
          <Tag title="christmas"/>
          <Tag title="flower"/>
          <Tag title="frame"/>
          <Tag title="halloween"/>
          <Tag title="infographic"/>
          <Tag title="pattern" />
          </div>
          </div>
          </div>
    );
}
export default TagBar
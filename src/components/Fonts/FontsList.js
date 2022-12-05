import React from 'react'
import FontCard from './FontCard';
import './fontslist.css';
const FontsList = () => {
  let btn1=document.getElementById('btn1');
  let btn2=document.getElementById('btn2');
  let btn3=document.getElementById('btn3');
  let btn4=document.getElementById('btn4');
  let title=document.getElementsByClassName('card-font-title');
  function clear(){
    btn1.classList.remove('size-selected');
    btn2.classList.remove('size-selected');
    btn3.classList.remove('size-selected');
    btn4.classList.remove('size-selected');
    title[0].classList.remove('p36');
    title[0].classList.remove('p24');
    title[0].classList.remove('p48');
    title[0].classList.remove('p72');
  }
function btn1Click()  {
 clear();
 btn1.classList.add('size-selected');
 title[0].classList.add('p24');
}
function btn2Click()  {
  clear();
  btn2.classList.add('size-selected');
  title[0].classList.add('p36');
 }
 function btn3Click()  {
  clear();
  btn3.classList.add('size-selected');
  title[0].classList.add('p48');
 }
 function btn4Click()  {
  clear();
  btn4.classList.add('size-selected');
  title[0].classList.add('p72');
 }
  return (

<div className='fonts '>
    <h2 className='fonts-title'>
  Type something and try our free fonts
  </h2>
  <br/>
  <div className='d-flex'>
  <input type='text' className='form-control search w-25' placeholder="The quick brown fox jumps over the lazy dogs">
  </input>
<div className='fontsizebtns'>
  <button className='btn btn-primary fontsize' id='btn1' onClick={btn1Click}>
    <p className='p-fontsize' >
     A
     <br/>
     24pt
    </p>
  </button>
  <button className='btn btn-primary fontsize size-selected' id='btn2' onClick={btn2Click}>
    <p>
     A
     <br/>
     36pt
    </p>
  </button>
  <button className='btn btn-primary fontsize' id='btn3'onClick={btn3Click}>
    <p>
     A
     <br/>
     48pt
    </p>
  </button>
  <button className='btn btn-primary fontsize' id='btn4' onClick={btn4Click}>
    <p>
     A
     <br/>
     72pt
    </p>
  </button>
</div>
<div className='grid-list'>
<button className='list'>
<i className="bi bi-list-ul"></i>
  </button>
  <button>
  <i className="bi bi-grid-3x3-gap-fill"></i>
  </button>
  </div>
  </div>
  <FontCard/>
  </div>
  )
}

export default FontsList

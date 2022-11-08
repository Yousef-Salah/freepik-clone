const Tag=(props) =>{
return(
<div className="tag-class">
<button className="btn btn-outline-secondary me-3 tag col" type="button"> 
<i className='bx bx-search' ></i>{props.title}</button>
</div>

);
}
export default Tag
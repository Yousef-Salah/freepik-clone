
const Type=(props) =>{
    return(
        
        <span className="type-class shrink-0">
<button className='btn btn-outline-secondary me-3 type shrink' type="button">
<i className={props.pic}></i>{props.title}</button>
        </span>
    );
}
export default Type
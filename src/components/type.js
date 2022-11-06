
const Type=(props) =>{
    return(
        
        <span className="type-class">
<button className="btn btn-outline-secondary me-3 type" type="button">
<i className={props.pic}></i>{props.title}</button>
        </span>
    );
}
export default Type
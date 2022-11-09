
const Type=(props) =>{
    const classes='btn btn-outline-secondary me-3 type'+ props.className
    return(
        
        <span className="type-class">
<button className={classes} type="button">
<i className={props.pic}></i>{props.title}</button>
        </span>
    );
}
export default Type
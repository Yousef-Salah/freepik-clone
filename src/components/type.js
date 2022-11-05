
const Type=(props) =>{
    return(
        <div>
<button className="btn btn-outline-secondary me-3 type" type="button">
<i className={props.pic}></i>{props.title}</button>
        </div>
    );
}
export default Type
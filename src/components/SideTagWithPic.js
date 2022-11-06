const SideTagWithPic=(props) =>{
    return(
    <div className="side-tag">
    <button className="btn btn-outline-secondary me-3 sidetag " type="button"> 
    <i className={props.pic}></i>
    {props.title}</button>
    </div>
    
    );
    }
    export default SideTagWithPic
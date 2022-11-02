const Type=(props) =>{
    return(
        <div>
<button className="btn btn-outline-secondary me-3 type" type="button">
             <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
  <path d={props.pathd}/>
  <path d={props.pathd1}/>
</svg>{props.title}</button>
        </div>
    );
}
export default Type
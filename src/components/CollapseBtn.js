const CollapseBtn=(props)=>{
    return (
        <div className="collapsebtn">
             <button className="btn" type="button" data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.aria}>
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16">
  <path d={props.pathd}/>
</svg>
{props.title}
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
</svg>  </button>
        </div>
    )
}
export default CollapseBtn
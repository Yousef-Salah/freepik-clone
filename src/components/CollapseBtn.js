import './Filters.css';
const CollapseBtn=(props)=>{


    return (
      <div className='container-fluid'>
        <div className="collapsebtn col-12">
             <button className="btn-collapse" type="button" id={props.id} data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.aria}>
             <i class={props.pic} ></i>
{props.title}
 </button>
<i className='bx bx-chevron-down arrow' data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.aria}></i> 
       </div>
        </div>
    )
}  

export default CollapseBtn
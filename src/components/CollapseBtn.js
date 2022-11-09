import './Filters.css';
const CollapseBtn=(props)=>{


    return (
      <div className='container-fluid table-row'>
        <div className="collapsebtn">

             <button className="btn-collapse w-100" type="button" id={props.id} data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.aria}>
             <i className={props.pic} ></i>

{props.title}
<i className='bx bx-chevron-down arrow absolute right-0' data-bs-toggle="collapse" data-bs-target={props.target} aria-expanded="false" aria-controls={props.aria}></i> 

 </button>

       </div>
        </div>
    )
}  

export default CollapseBtn
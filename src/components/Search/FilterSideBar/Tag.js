import { useNavigate } from "react-router-dom";
const Tag = (props) => {
  const navigate = useNavigate();
  let className1,className;
  if(props.className1=='tag' || props.className1=='type'){
    className1=props.className1+ ' me-3';
    className=props.className;
  }
  else if(props.className1==null && props.className1==null){
    className='side-tag'
    className1='sidetag'
  }
  return (
    <span className={` flex-shrink-0 ` + className}>
      <button
        className={
          ` btn btn-outline-secondary d-flex ` + className1
        }
        type="button"
        onClick={() => navigate(`/${props.page}/${props.title}`)}
      >
        <p>
        <i className={props.pic ? props.pic+ " tag-icon":'d-none' }></i>
        {props.title}
        </p>
      </button>
    </span>
  );
};
export default Tag;

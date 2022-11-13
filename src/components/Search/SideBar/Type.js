const Type = (props) => {
  return (
    <span className="type-class shrink-0">
      <button
        className="btn btn-outline-secondary me-3 type shrink-0 container-fluid relative "
        type="button"
      >
        <i className={props.pic + " icon"}></i>
        {props.title}
      </button>
    </span>
  );
};
export default Type;

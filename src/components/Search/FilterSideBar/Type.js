const Type = (props) => {
  return (
    <span className="type-class tw-shrink-0 ">
      <button
        className="tw-btn tw-btn-outline-secondary me-3 type tw-shrink-0 tw-container-fluid tw-relative tw-flex"
        type="button"
      >
        <i className={props.pic + " icon"}></i>
        {props.title}
      </button>
    </span>
  );
};
export default Type;

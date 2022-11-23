const DropDownButton = (props) => {
  return (
    <button
      id="search-filters"
      type="button"
      className="dropdown-toggle rounded-start text-align-start"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      data-bs-auto-close="outside"
    >
      {props.buttonLabel}
    </button>
  );
};

export default DropDownButton;

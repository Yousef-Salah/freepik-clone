const SideTag = (props) => {
  return (
    <div className="side-tag  w-16">
      <button className="btn btn-outline-secondary  sidetag" type="button">
        <p className="sidetaginner content-center	">
        {props.title}
        </p>
      </button>
    </div>
  );
};
export default SideTag;

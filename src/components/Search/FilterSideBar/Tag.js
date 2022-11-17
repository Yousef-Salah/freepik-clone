const Tag = (props) => {
  return (
    <div className="flex h-16">
      <div className="tag-class">
        <button className="btn btn-outline-secondary me-3 tag" type="button">
          <i className="bx bx-search icon"></i>
          <p>{props.title}</p>
        </button>
      </div>
    </div>
  );
};
export default Tag;

const DropDwonItem = (props) => {

  const icon = (props.iconClasses) ? <i className={props.iconClasses + " li-icon"}></i>
    : null;

  const gold = (props.goldItem) ? "gold-item" : "";

  const item = (
    <div className="mb-2">
      <div className="form-check">
        <input
          className="form-check-input"
          type={props.type ? props.type : "checkbox"}
          value=""
          id={props.for}
          name={props.name}
          onClick={props.handler}
          title={props.title}
          onChange={props.inputHandler}

          // checked={(props.checked) ? "" : ""}
        />
        <label className={`form-check-label ${gold}`} htmlFor={props.for}>
          {(icon) ? icon : ''}
          {props.title}
        </label>
      </div>
    </div>
  );

  const divider = <hr className="dropdown-divider" />;

  const result = props.divider ? divider : item;

  return (
    result
  );
};

export default DropDwonItem;

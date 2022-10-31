const DropDwonItem = (props) => {

  const icon = (props.iconClasses) ? <i className={props.iconClasses + " li-icon"}></i>
  : null;

  const item = (
    <div class="form-check">
      <input
        class="form-check-input"
        type={props.type ? props.type : "checkbox"}
        value=""
        id={props.for}
        name={props.name}
      />
      <label className="form-check-label" for={props.for}>
        {(icon)? icon: ''}
        {props.title}
      </label>
    </div>
  );

  const divider = <hr class="dropdown-divider" />;

  const result = props.divider ? divider : item;

  return(
    <li>
      {result}
    </li>
  );
};

export default DropDwonItem;

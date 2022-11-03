const DropDwonItem = (props) => {

  const icon = (props.iconClasses) ? <i className={props.iconClasses + " li-icon"}></i>
  : null;

  const gold = (props.goldItem) ? "gold-item" : "";

  const item = (
    <div class="form-check">
      <input
        class="form-check-input"
        type={props.type ? props.type : "checkbox"}
        value=""
        id={props.for}
        name={props.name}
        selected
        
      />
      <label className={`form-check-label ${gold}`} for={props.for}>
        {(icon)? icon: ''}
        {props.title}
      </label>
    </div>
  );

  const divider = <hr class="dropdown-divider" />;

  const result = props.divider ? divider : item;

  return(
    result
  );
};

export default DropDwonItem;

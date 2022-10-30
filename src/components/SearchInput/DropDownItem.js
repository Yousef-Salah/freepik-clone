const DropDwonItem = (props) => {
  const item = (
    <div class="form-check">
      <input
        class="form-check-input"
        type={props.type ? props.type : "checkbox"}
        value=""
        id="flexCheckDefault"
        name={props.name}
      />
      <label class="form-check-label" for="flexCheckDefault">
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

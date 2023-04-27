const Type = (props) => {
  return (
    <span className={`tw-shrink-0 ` + props.className}>
      <button
        className={
          `tw-btn tw-btn-outline-secondary me-3 tw-shrink-0 tw-container-fluid tw-relative tw-flex ` +
          props.className1
        }
        type="button"
      >
        <i className={props.pic + ' icon'}></i>
        {props.title}
      </button>
    </span>
  )
}
export default Type

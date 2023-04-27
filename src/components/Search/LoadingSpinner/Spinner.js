import './loading-spinner.css'

const Spinner = (props) => {
  return (
    <div className={`position-relative ${!props.visible && 'd-none'}`}>
      <div className="spinner-border text-info" role="status" id="loading-spinner">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner

import "./loading-spinner.css";

const Spinner = () => {
  return (
    <div className="position-relative">
      <div class="spinner-border text-info" role="status" id="loading-spinner">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

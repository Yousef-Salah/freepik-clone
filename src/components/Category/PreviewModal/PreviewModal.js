import "./preview-modal.css";


const PreviewModal = (props) => {

  document.getElementById("preview-model")
          .addEventListener("wheel", (event) => {
            event.preventDefault();
          });

  // ! hating web design
  return(
    <div id="preview-model">
      testing
    </div>
  );
}

export default PreviewModal;
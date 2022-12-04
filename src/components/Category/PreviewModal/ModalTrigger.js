import { useState } from "react";
import "./preview-modal.css";
import PreviewModal from "./PreviewModalComponents/PreviewModal";

export const ModalTrigger = (props) => {
  /**
   * Figure our the keywords
   * Search about Keywords
   * return the component with the actual data
   */

  const [display, setDisplay] = useState(false);

  const buttonHandler = () => {
    setDisplay(!display);
  };

  return display ? (
    <PreviewModal buttonHandler={buttonHandler} />
  ) : (
    <button className="btn btn-primary" onClick={buttonHandler}>
      Click to show Modal
    </button>
  );
};

export default ModalTrigger;

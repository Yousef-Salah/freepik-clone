import { useState } from "react";
import { Link } from "react-router-dom"; 
import "./preview-modal.css";
import PreviewModal from "./PreviewModalComponents/PreviewModal";

export const ModalTrigger = (props) => {

  /**
   * Figure our the keywords
   * Search about Keywords
   * return the component with the actual data
   */

  const [display, setDisplay] = useState(true);

  return(
    (display) ? <PreviewModal /> : <></> 
  );
}

export default ModalTrigger;
import { useEffect, useState } from "react";
import "./preview-modal.css";
import PreviewModal from "./PreviewModalComponents/PreviewModal";

export const ModalTrigger = (props) => {
	/**
	 * Figure our the keywords
	 * Search about Keywords
	 * return the component with the actual data
	 */

	const [display, setDisplay] = useState(false);
	const [initialLoad, setInitialLoad] = useState(true);
	console.log("ModalTrigger ~ display", display)
	console.log(props.data)

	useEffect(() => {
		!initialLoad && buttonHandler();
		setInitialLoad(false)
	}, [props.displayStatus])

	const buttonHandler = () => {
		setDisplay(!display);

		console.log("tring to close the modal");
	};

	return display ? (
		<PreviewModal buttonHandler={buttonHandler} data={props.data} />
	) : (
		// <button className="btn btn-primary my-modal-btn" onClick={buttonHandler}>
		// 	Click to show Modal
		// </button>
		null
	);
};

export default ModalTrigger;

import { useEffect, useState } from "react";
import "./preview-modal.css";
import PreviewModal from "./PreviewModalComponents/PreviewModal";

export const ModalTrigger = (props) => {
	//? This component handles toggling the modal, and passes the data to the modal
	//? requires the displayStatus from the props to load/unload the modal
	const [display, setDisplay] = useState(false);
	const [initialLoad, setInitialLoad] = useState(true);

	useEffect(() => {
		!initialLoad && buttonHandler();
		setInitialLoad(false)
	}, [props.displayStatus])

	const buttonHandler = () => {
		props.MTStatus(!display)
		setDisplay(!display);
	};

	return display ? (
		<PreviewModal buttonHandler={buttonHandler} data={props.data} />
	) : (

		null
	);
};

export default ModalTrigger;

// import "./filter-sideBar.css";
import "./filters.css";
import { useState } from "react";
function getClassItem(selected) {
	if (selected) {
		return "btn btn-outline-secondary sidetag-selected";
	} else {
		return "btn btn-outline-secondary  sidetag";
	}
}
const SideTag = (props, onClick) => {
	return (
		<div className="side-tag ">
			<button className="btn btn-outline-secondary  sidetag">
				<p className="sidetaginner content-center	">{props.title}</p>
			</button>
		</div>
	);
};
export default SideTag;

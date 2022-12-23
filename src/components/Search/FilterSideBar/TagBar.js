import React from "react";
import Type from "./Tag";
import './tag-bar.css'

import { useNavigate } from "react-router-dom";

const TagBar = (props) => {
	const navigate = useNavigate();
	const TagBarData = [{
		title: "Photos",
		pic: "bi bi-image tw-left-0",
		className: "type-class",
		className1: "type",
	},
	{
		title: "PSD",
		pic: "bi bi-filetype-psd",
		className: "type-class",
		className1: "type",
	},
	{
		title: "All images",
		pic: "bx bxs-shapes",
		className: "type-class",
		className1: "type",
	},
	{
		title: "arrow",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "Background",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "business card",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "certificates",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "christmas",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "flower",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "frame",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "halloween",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "infographic",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	},
	{
		title: "pattern",
		pic: "bx bx-search icon",
		className: "tag-class",
		className1: "tag",
	}]
	return (
		<div className="tab-bar-container">
			<div
				id={props.id}
				className={
					`tw-flex tagbar tw-absolutetw-h-100 ` + props.className
				}
			>
				{TagBarData.map((val, key) => {
					return (
						<div onClick={() => navigate(`/search/${val.title}`)}>

							<Type
								title={val.title}
								pic={val.pic}
								className={val.className}
								className1={val.className1}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TagBar;

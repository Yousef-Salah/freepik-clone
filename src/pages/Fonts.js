import React, { useState, useEffect } from "react";
import SearchResultHeader from "../components/Search/SearchResults/SearchResultHeader";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
// import { useCookies } from "react-cookie";
import DataFilter from "../Helpers/DataFilter";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import FontsList from "../components/Fonts/FontsList";
const Fonts = (props) => {

	const SideBarData = [
		{
			collapse: "Type",
			icon: "bi bi-type",
			icon1: [],
			tag: 1,
			tags: [
				"All",
				"Serif",
				"Sans Serif",
				"Display",
				"Slab serif",
				"Script",
				"Monospace",
			],
			id: "typeCollapse",
			page: "fonts",
		},
	];
	const TagBarData = [
		{
			title: "All fonts",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Funny",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Happy",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Creative",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Retro",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Brush",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Calligraphy",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Comic",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Wedding",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Halloween",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Summer",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Fall",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Latin",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
		{
			title: "Vintage",
			className: "tag-class",
			className1: "tag",
			page: "fonts",
		},
	];
	const [open, setOpen] = useState(false);
	const updateOpen = (value) => {
		setOpen(value);
	};
	useEffect(() => {
		props.page("Fonts");
	}, []);
	let dataFilter;


	const [lastWord, setLastWord] = useState("");
	let [link, setLink] = useState(window.location.href);
	useEffect(() => {
		setLink(location.pathname);

		if (link !== "http://localhost:3000/fonts") {
			const words = link.split("/");
			const fontsIndex = words.indexOf("fonts");
			const newLastWord = words[fontsIndex + 1];
			setLastWord(newLastWord.replace("All%20fonts", " "));
		}
	}, [location]);

	return (
		<>

			{/*<SearchContainer mainPage={false} />*/}
			<SideBar updateOpen={updateOpen} data={SideBarData} />

			<div className={`fonts-page ${!open ? "base" : "pushed"}`}>
				<TagBar
					data={TagBarData}
					className={`${!open ? "base" : "pushed-tagbar"}`}
				/>
				<SearchResultHeader
					title={`Free ${lastWord} Fonts`}
					description="Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!"
				/>
				<FontsList />
			</div>
		</>
	);
};

export default Fonts;

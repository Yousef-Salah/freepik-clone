import React, { useState, useEffect } from "react";
import SearchResultHeader from "../components/Search/SearchResults/SearchResultHeader";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import DataFilter from "../Helpers/DataFilter";
import SearchContainer from "../components/Search/SearchBox/SearchContainer";
import FontsTagBarData from "../utils/FontsTagBarData";
import FontsSideBarData from "../utils/FontsSideBarData";
import FontsList from "../components/Fonts/FontsList";
const Fonts = (props) => {
  const [open, setOpen] = useState(false);
  const updateOpen = (value) => {
    setOpen(value);
  };
  useEffect(() => {
    props.page("Fonts");
  }, []);
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

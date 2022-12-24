import React, { useState, useEffect } from "react";
import SearchResultHeader from "../components/Search/SearchResults/SearchResultHeader";
import SideBar from "../components/Search/FilterSideBar/SideBar";
import TagBar from "../components/Search/FilterSideBar/TagBar";
import FontsGridView from "../components/Fonts/FontsGridView";
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
      page: "fontsgrid",
    },
  ];

  const TagBarData = [
    {
      title: "All fonts",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Funny",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Happy",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Creative",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Retro",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Brush",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Calligraphy",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Comic",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Wedding",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Halloween",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Summer",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Fall",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Latin",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
    },
    {
      title: "Vintage",
      className: "tag-class",
      className1: "tag",
      page: "fontsgrid",
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
  /*useEffect(() => {
    props.page("Fonts");
    dataFilter = new DataFilter(cookies.searchInput);
    loadData(10);
  }, [dataFilter])


    const [cookies, setCookie, removeCookie] = useCookies(["searchInput"]);
    const [data, setData] = useState([]);

    const loadData = () => {
      setData(dataFilter.get(10));
    }

    console.log(cookies.searchInput); 
  /*}
    // removeCookie("searchInput");
        */
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

      <div
        className={`fonts-page fonts-grid-page ${!open ? "base" : "pushed"}`}
      >
        <TagBar
          data={TagBarData}
          className={`${!open ? "base" : "pushed-tagbar"}`}
        />
        <SearchResultHeader
          title={`Free ${lastWord} Fonts`}
          description="Discover and install our selection of free fonts, include them in your projects and make incredible designs! Book covers, merchandise, billboards, magazines. Start creating now!"
        />
        <FontsGridView />
      </div>
    </>
  );
};

export default Fonts;

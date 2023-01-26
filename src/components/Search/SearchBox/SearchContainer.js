import SearchBox from "./SearchComponents/SearchBox";
import "./search-container.css";
import { Link } from "react-router-dom";
import TransparentSearchTag from "./SearchComponents/TransparentSearchTag";

// TODO: Search input responsive bug & container class issue

const SearchContainer = (props) => {
  let mainPageComponent = (
    <>
      <div className="container-fluid" id="mp-search-container">
        <div className="logo-wrapper">
          <img
            // src="assets/images/navbar/freepik-no_bg.png"
            src="https://github.com/Yousef-Salah/freepik-cap/blob/yousef/public/assets/images/navbar/freepik-no_bg.png"
            alt="freepik logo"
          />
        </div>
        <h1 className="h1 text-center">
          All the assets you need, in one place
        </h1>
        <h2 className="h2 text-center">
          Find and download the best high-quality photos, designs, and mockups
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <SearchBox
            dataHandler={props.dataHandler}
            mainPage={true}
            searchQuery={props.searchQuery}
            page={props.page}
          />
        </div>
        <div
          className="row d-flex justify-content-center pt-3"
          id="search-input-tags">
          <TransparentSearchTag title="Infographic" />
          <TransparentSearchTag title="Social Media" />
          <TransparentSearchTag title="Template" />
        </div>
      </div>
    </>
  );

  let categoriesSearchComponent = (
    <div className="container-fluid" id="op-search-container">
      <div className="row">
        <div className="col-3 col-sm-2">
          <Link
            to="/"
            className="d-flex align-items-center justify-content-center w-100 h-100">
            <img
              className="h-100"
              src={require("../../../assets/images/icons/freepik-full-logo.PNG")}
              alt="freepik icon"
            />
          </Link>
        </div>
        <div className="col-9 col-sm-10">
          <SearchBox
            dataHandler={props.dataHandler}
            mainPage={false}
            searchQuery={props.searchQuery}
            page={props.page}
          />
        </div>
      </div>
    </div>
  );

  return props.mainPage ? mainPageComponent : categoriesSearchComponent;
};

export default SearchContainer;


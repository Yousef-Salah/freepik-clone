import SearchBox from "./SearchComponents/SearchBox";
import "./search-container.css";
import { Link } from "react-router-dom";
import mainIcon from "../../../assets/images/navbar/freepik-no_bg.png";

const SearchContainer = (props) => {
  let mainPageComponent = (
    <>
      <div className="container-fluid" id="mp-search-container">
        <h1 className="text-center">All the assets you need, in one place</h1>
        <h2 className="text-center">
          Find and download the best high-quality photos, designs, and mockups
        </h2>
      </div>
      <div className="container-fluid">
        <div className="row gutter-none">
          <SearchBox mainPage={true} />
        </div>
      </div>
    </>
  );

  let categoriesSearchComponent = (
    <div className="container-fluid" id="op-search-container">
      <div className="row">        
        <SearchBox mainPage={false} />
      </div>
    </div>
  );

  return(
    (props.mainPage) ? mainPageComponent : categoriesSearchComponent
  );
};

export default SearchContainer;

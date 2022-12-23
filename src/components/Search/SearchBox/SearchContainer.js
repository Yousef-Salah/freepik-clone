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
        <div className="row">
          <SearchBox dataHandler={props.dataHandler} mainPage={true} searchQuery={props.searchQuery} page={props.page}/>
        </div>
      </div>
    </>
  );

  let categoriesSearchComponent = (
    <div className="container-fluid" id="op-search-container">
      <div className="row">
        <div className="col-3 col-sm-2 d-flex align-items-center justify-content-center">
          <img className="h-100" src={require('../../../assets/images/icons/freepik-full-logo.PNG')} alt="freepik icon" />
        </div>
        <div className="col-9 col-sm-10">
          <SearchBox dataHandler={props.dataHandler} mainPage={false} searchQuery={props.searchQuery} page={props.page}/>
        </div>
      </div>
    </div>
  );

  return(
    (props.mainPage) ? mainPageComponent : categoriesSearchComponent
  );
};

export default SearchContainer;

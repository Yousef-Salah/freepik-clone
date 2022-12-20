import "./search-results.scss";
import Searchimgcard from "./Searchimgcard";
import SearchResultHeader from "../FilterSideBar/SearchResultHeader"

const SearchResults = (props) => {

  return (
    <>
      {/* <SearchResultHeader title="Free Vectores" sort='True' /> */}
      <div id="search-results-content" className="d-none">
        {props.images.map((item) => {
          return <Searchimgcard Cardphoto={item} />;
        })}
      </div>
    </>
  );
};

export default SearchResults;

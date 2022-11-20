import SearchBox from "./SearchBox";
import "./search-container.css";

const SearchContainer = () => {
  return(
    <div className="container-fluid" id="search-container">
      <h1 className="text-center">
        All the assets you need, in one place
      </h1>
      <h2 className="text-center">
        Find and download the best high-quality photos, designs, and mockups
      </h2>
      <div className="row">
        <SearchBox />
      </div>
    </div>
  );
}

export default SearchContainer;

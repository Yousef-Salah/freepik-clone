// Imports
import "./SearchInput.css";
import DropDownItem from "./SearchInput/DropDownItem";

// Components

const SearchInput = (props) => {
  return (
    <div className={props.className} id="search-input-container">
      <form id="search" className="w-100" placeholder="search..">
        <div id="dropdown-button">
          <button
            type="button"
            class="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Action
          </button>
          <ul class="dropdown-menu">
            <div id="search-type">
              <DropDownItem
                type="radio"
                title="Action"
                href="#"
                name="search-type"
              />
              <DropDownItem
                type="radio"
                title="Another action"
                href="#"
                name="search-type"
              />
            </div>
            <DropDownItem divider={true} />
            <DropDownItem title="Something else here" href="#" />
            <DropDownItem title="Separated link" href="#" />
          </ul>
        </div>
        <input type="text" />
        <button type="button" id="search-button">
          s
        </button>
      </form>
    </div>
  );
};

// Exports
export default SearchInput;

import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";
import SponsoredBy from "./components/SponsoredBy";

function App() {
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 align-item-center mr-auto ml-auto">
            <SearchInput  className="yousef salah khodroj"/>
          </div>
        </div>
      </div>
      <SponsoredBy className="mt-5"/>
    </div>
  );
}

export default App;

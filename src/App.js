import logo from "./logo.svg";
import "./App.css";
import SearchInput from "./components/SearchInput";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 offset-1">
          <SearchInput />
        </div>
      </div>
    </div>
  );
}

export default App;

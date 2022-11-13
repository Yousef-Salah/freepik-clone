// import './App.css';
import Search from './components/SearchInput'
import Sponsors from './components/global/SponsoredBy/SponsoredBy'

function App() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <Search />
      </div>
      <div className='row mt-5'>
      <Sponsors />
      </div>
    </div>
  );
}

export default App;

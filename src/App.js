import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

//page content import
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Fonts from './pages/Fonts';
import FontsFormatGrid from './pages/FontsFormatGrid';
import Page3D from './pages/Page3D';
import Login from './pages/Login';
//layouts imports
import Navbar from "./components/Layouts/Navbar/Navbar";
import Pricing from './pages/Pricing';
//import Enhance from './components/Pricing/PricingSection/Enhance/Enhance';
//import Promote from './PromoteSiteFeatures/Promote';
import NotFound from './components/Common/NotFound/NotFound';
import Footer from './components/Layouts/Footer/Footer';

// Helper Classes 
import DataFilter from './Helpers/DataFilter';
import Signup from './pages/Signup';


const App = () => {
	const [page, setPage] = useState("home");

  const [searchQuery,setSearchQuery] = useState({
      searchInput: "",
      itemType: "Assets",     // assets collections
      itemPriceType: [],  // free premium
      category: "",
    }
  );
	const addQuery = (sq) => {
		console.log(sq);
		let searchCat = sq.pathname.split("/")[2];
		let searchQuery = sq.search.split("?query=")[1];
		console.log(searchCat, searchQuery);
	}
  let dataFilter = new DataFilter();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar page={page} />
        <Routes>
          <Route path={'/*'} element={<NotFound page={(name) => { setPage(name) }} />} />
          <Route path={'/'} element={<Home page={(name) => { setPage(name) }} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />} />
          <Route path={'/search/:term'} element={<Search page={(name) => { setPage(name) }} dataFilter={dataFilter} setSearchQuery={setSearchQuery} searchQuery={searchQuery} newQuery={addQuery}/>} />
          <Route path={'/category/:term'} element={<Category catStyle="style_sep" page={(name) => { setPage(name) }} dataFilter={dataFilter} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />} />
          <Route path={'/pricing'}element={<Pricing page={(name)=>{setPage(name)}} />} />
          <Route path={'/login'} element={<Login page={(name) => { setPage(name) }} />} />
          <Route path={'/signup'} element={<Signup page={(name) => { setPage(name) }} />} />
          <Route path={'/3d-models'} element={<Page3D page={(name) => { setPage(name) }} />} />
          <Route path={'/fonts/:term'} element={<Fonts page={(name) => { setPage(name) }} />} />
          <Route path={'/fonts/'} element={<Fonts page={(name) => { setPage(name) }} />} />
          <Route path={'/fontsgrid'} element={<FontsFormatGrid page={(name) => { setPage(name) }} />} />
          <Route path={'/fontsgrid/:term'} element={<FontsFormatGrid page={(name) => { setPage(name) }} />} />

        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
	);
};

export default App;
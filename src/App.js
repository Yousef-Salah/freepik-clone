import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

//page content import
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";

//layouts imports

import Navbar from "./components/Layouts/Navbar/Navbar";
import Pricing from './pages/Pricing';
import Login from './pages/Login';
//import Promote from './PromoteSiteFeatures/Promote';
import Fonts from './pages/Fonts';
import FontsFormatGrid from './pages/FontsFormatGrid';
import Page3D from './pages/Page3D';


const App = () => {
	const [page, setPage] = useState("home");

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar page={page} />
        <Routes>
          <Route path={'/'} element={<Home page={(name) => { setPage(name) }} />} />
          <Route path={'/search/:term'} element={<Search page={(name) => { setPage(name) }} />} />
          <Route path={'/category/:term'} element={<Category page={(name) => { setPage(name) }} />} />
          <Route path={'/pricing'}element={
          // <Pricing page={(name)=>{setPage(name)}} />
              <Pricing page={(name)=>{setPage(name)}} />
          // <h1>Hello world</h1>
          } />
          <Route path={'/login/:term'} element={<Login page={(name) => { setPage(name) }} />} />
          <Route path={'/3d-models'} element={<Page3D page={(name) => { setPage(name) }} />} />
          <Route path={'/fonts'} element={<Fonts page={(name) => { setPage(name) }} />} />
          <Route path={'/fontsgrid'} element={<FontsFormatGrid page={(name) => { setPage(name) }} />} />

        </Routes>
        
      </BrowserRouter>
      

      {/* <Search /> */}
      {/* <Category /> */}
      {/* <Home /> */}
    </div>

	);
};

export default App;
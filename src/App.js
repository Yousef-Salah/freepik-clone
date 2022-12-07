import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

//page content import
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";

//layouts imports
import Footer from './components/Layouts/Footer/footer';
import Navbar from "./components/Layouts/Navbar/Navbar";
//import Promote from './PromoteSiteFeatures/Promote';

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
        </Routes>
        
        <Footer />
      </BrowserRouter>
      
      

      {/* <Search /> */}
      {/* <Category /> */}
      {/* <Home /> */}
    </div>

  );
};

export default App;
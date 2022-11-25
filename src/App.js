import React, { useState } from 'react';

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

//page content import
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";

//layouts imports
import Footer from './components/Layouts/Footer/Footer';
import Navbar from "./components/Layouts/Navbar/Navbar";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
      <Navbar page={page} />
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home page={(name) => { setPage(name) }} />} />
          <Route path={'/search'} element={<Search page={(name) => { setPage(name) }} />} />
          <Route path={'/category'} element={<Category page={(name) => { setPage(name) }} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* <Search /> */}
      {/* <Category /> */}
      {/* <Home /> */}
    </div>

  );
};

export default App;
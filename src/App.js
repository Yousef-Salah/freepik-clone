import React from "react";
import Footer from "./components/Footer/Footer";
import "./components/Footer/FooterStyle.css";


  
  
// import CardHeader from './components/Category/PandaSection/Crads';
// import ImageCard from './components/Home/CircleCategoy/Imag';
// import CommunitySection from './components/Home/JoinCommunity/Joins';

// import TagBar from './components/Search/SideBar/TagBar';
// import SideBar from './components/Search/SideBar/SideBar';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <SponsoredBy />
        <div className="App">
      <CardHeader/>
<div id='s'></div>
<HeaderWithPargraph isRight={true}/>
      <Navbar />
      <SearchInput />
      <ImageCard />
      <Annual />
      <Trending />
      <Footer />
      <h1>##Preview components##</h1>
      <hr />
      <CategoryCard />
      <hr />
      <CardHeader />
      <hr />
      <SponsoredBy />
      <hr />
      <CommunitySection />
      <hr />
      {/* <SideBar /> */}
      <hr />
      {/* <TagBar /> */}
    </div>
      </div>
      </div>
      
  );
};

export default App;
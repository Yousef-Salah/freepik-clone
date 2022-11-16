import React from "react";
import Footer from "./components/Footer/Footer";
import "./components/Footer/FooterStyle.css";

const App = () => {
  return (

  
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
  );
};

export default App;
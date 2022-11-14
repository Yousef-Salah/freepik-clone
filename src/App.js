import Footer from './components/Layouts/Footer/footer';
import Trending from './components/Home/trending/Trending';
import Annual from './components/Home/AnnualDiscount/Annual'
import SearchInput from './components/Layouts/SearchInputCom/SearchInput';
import SponsoredBy from './components/Layouts/SponsoredBy/SponsoredBy';
import CategoryCard from './components/Category/CategoryCard/CategoryCard';
import Navbar from './components/Layouts/Navbar/Navbar';

import CardHeader from './components/Category/PandaSection/Crads';
import ImageCard from './components/Home/CircleCategoy/Imag';
import CommunitySection from './components/Home/JoinCommunity/Joins';

// import TagBar from './components/Search/SideBar/TagBar';
// import SideBar from './components/Search/SideBar/SideBar';

function App() {
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
}

export default App;

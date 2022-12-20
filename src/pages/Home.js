import React, { useState, useEffect } from 'react';


import SearchContainer from '../components/Search/SearchBox/SearchContainer';
import Annual from "../components/Home/AnnualDiscount/AnnualDiscount";
import Trending from "../components/Home/TrendingCategories/TrendingCategories";
import CircleCategoy from "../components/Home/CircleCategoy/CircleCategoy";
import JoinSection from "../components/Common/JoinSection/JoinSection";
// import Promote from '../components/Home/PromoteSiteFeatures/Promote';
import Wepik from '../components/Home/Wepik/Wepik';
import CreatorCollection from "../components/Home/CreatorCollection/CreatorCollection";
import DiscoverCollections from "../components/Collections/DiscoverCollection/DiscoverCollections"
import DiscoverCollectionTitle from '../components/Collections/DiscoverCollection/DiscoverCollectionsTitle';
import CreatorCollectionTitle from '../components/Home/CreatorCollection/CreatorCollectionTitle';
import ExploreCard from '../components/Home/CreatorCollection/ExploreCard';



const Home = (props) => {

    useEffect(() => {
        props.page("home")
    }, [])

    return (
        <>
            <SearchContainer mainPage={true} />
            <CircleCategoy />
            <Annual />
            <Trending />
            <CreatorCollectionTitle />
            <div className='row collection-row'>

                <CreatorCollection />
                <CreatorCollection />
                <CreatorCollection />
                <CreatorCollection />
                <ExploreCard />
            </div>


            {/* on the collection page just for testting */}
            
            {/* <DiscoverCollectionTitle />
            <div className='container-fluid cscs'>
                <div className='row discover-collection-row'>
                    <div className='col-3'>
                        <DiscoverCollections />
                    </div> <div className='col-3'>
                        <DiscoverCollections />
                    </div> <div className='col-3'>
                        <DiscoverCollections />
                    </div> <div className='col-3'>
                        <DiscoverCollections />
                    </div>
                </div>
            </div> */} 




            <Wepik />



        </>
    )
}

export default Home
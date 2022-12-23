import React, { useState, useEffect } from 'react';
import DiscoverCollections from '../components/Collections/DiscoverCollection/DiscoverCollections';
import DiscoverCollectionTitle from '../components/Collections/DiscoverCollection/DiscoverCollectionsTitle';


const Collections =(props)=>{
    useEffect(() => {
        props.page("Collection")
    }, [])
    return (
        <>
        <DiscoverCollectionTitle/>
        <DiscoverCollections />
        </>
    );

}
export default  Collections;

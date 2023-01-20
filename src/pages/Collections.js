import React, { useState, useEffect } from 'react';
import DiscoverCollections from '../components/Collections/DiscoverCollection/DiscoverCollections';
import DiscoverCollectionTitle from '../components/Collections/DiscoverCollection/DiscoverCollectionsTitle';
import MainLayout from '../components/Layouts/MainLayout';


const Collections =(props)=>{
    useEffect(() => {
        props.page("Collection")
    }, [])
    return (
        <>
        <MainLayout page={props.page}>
        <DiscoverCollectionTitle/>
        <DiscoverCollections />
        </MainLayout>
        </>
    );

}
export default  Collections;

import React, { useState, useEffect } from 'react';
import DiscoverCollections from '../components/Collections/DiscoverCollection/DiscoverCollections';


const Collections =(props)=>{
    useEffect(() => {
        props.page("Collection")
    }, [])
    return (
        
        <DiscoverCollections />
        
    );

}
export default  Collections;

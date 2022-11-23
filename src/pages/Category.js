import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CategorySection from '../components/Category/CategorySection/CategorySection';
import CategoryHeader from '../components/Category/CategoryHeader/CategoryHeader';
import SearchInput from '../components/Search/SearchBox/SearchBox';
import JoinSection from '../components/Common/JoinSection/JoinSection'
import CategoryFullList from '../components/Category/CategoryFullList/CategoryFullList';

const Category = (props) => {
    const urlParams = useParams();

    useEffect(() => {
        props.page("category")
    }, [])

    return (
        <>
            <SearchInput />
            <CategoryHeader />
            <CategoryFullList category={urlParams.term} />
            <CategorySection />
            <JoinSection />
        </>
    )
}

export default Category
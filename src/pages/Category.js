import React, { useState, useEffect } from 'react';


import CardHeader from '../components/Category/CategorySection/CategorySection';
import CategoryCard from '../components/Category/CategoryCard/CategoryCard';
import HeaderWithPargraph from '../components/Category/CategoryHeader/CategoryHeader';
import SearchInput from '../components/Search/SearchBox/SearchBox';
import JoinSection from '../components/Common/JoinSection/JoinSection'
const Category = (props) => {

    useEffect(() => {
        props.page("category")
    }, [])

    return (
        <>
            <SearchInput mainPage={false} />
            <HeaderWithPargraph />
            <br />
            <CategoryCard />
            <br />
            <CardHeader />
            <JoinSection />
        </>
    )
}

export default Category
import React, { useState, useEffect } from 'react';
import SignUp from '../components/Signup/SignUp';

const Signup =(props)=>{
    useEffect(() => {
        props.page("signup")
    }, [])
    return (
        
        <SignUp />
        
    );

}
export default Signup ;

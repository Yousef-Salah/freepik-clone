import React, { useState, useEffect } from 'react';
import LogIn from '../components/Login/LogIn';


const Login =(props)=>{
    useEffect(() => {
        props.page("login")
    }, [])
    return (
        
        <LogIn />
        
    );

}
export default Login ;

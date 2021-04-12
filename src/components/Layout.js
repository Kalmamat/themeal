import React from 'react';
import Header from "../Header";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <wpapper>
            <Header/>
            <div className='container'>
                {children}
            </div>
            <Footer/>
        </wpapper>
    );
};

export default Layout;
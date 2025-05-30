import React from 'react';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer';

const LayoutPage = () => {
    return (
        <>
          <Header></Header>  
          <Outlet></Outlet> 
          <Footer></Footer>
          {/* //for navigate */}
        </>
    );
}

export default LayoutPage;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import './Main.css'

const Main = () => {
  return (
    <div className='wrapper'>
             <div className="content">
             <Navbar></Navbar>
            <Outlet></Outlet>
      </div>
      <footer className="footer">
      <Footer></Footer>
      </footer>
            
        </div>
  );
};

export default Main;
import React from "react";
import "./Nav.css";
import "./layout.css";
import Header from '../Navbar/Header';
import {Outlet} from 'react-router-dom';

const Layout = (props) => {

  return (
    <div
      className="fixed-top"
    >
      <Header /> 
      <Outlet />
    </div>
  );
};

export default Layout;

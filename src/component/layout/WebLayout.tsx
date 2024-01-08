<<<<<<< HEAD
import React from 'react'
import Header from '../block/Header'
import {Outlet} from "react-router-dom"
import Footer from '../block/Footer'
=======
import React from "react";
import Header from "../block/Header";
import { Outlet } from "react-router-dom";
import Footer from "../block/Footer";
>>>>>>> e5ff16a26db9243ff537d7bbf9ebbe84e33723a4

const WebLayout: React.FC = () => {
  return (
<<<<<<< HEAD
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
=======
    <div className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
>>>>>>> e5ff16a26db9243ff537d7bbf9ebbe84e33723a4
    </div>
  );
};

export default WebLayout;

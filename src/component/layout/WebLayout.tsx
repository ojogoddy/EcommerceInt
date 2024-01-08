import React from 'react'
// import Header from '../block/Header'
import {Outlet} from "react-router-dom"
import Footer from '../block/Footer'

const WebLayout:React.FC = () => {
  return (
<<<<<<< HEAD
    <div
    className='overflow-hidden'
    >
        <Header/>
=======
    <div>
        {/* <Header/> */}
>>>>>>> 41ccae21f2a81a18f21768e4c2d771c76b2d1a42
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayout
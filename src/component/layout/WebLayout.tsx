import React from 'react'
import Header from '../block/Header'
import {Outlet} from "react-router-dom"
import Footer from '../block/Footer'

const WebLayout:React.FC = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default WebLayout
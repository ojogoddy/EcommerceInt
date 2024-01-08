
import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import {FaUser} from "react-icons/fa"
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from "react-router-dom"
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

const Header:React.FC = () => {
  const [active, setActive] = useState(0)
  const home = ["HOME", "SHOP", "CONTACT"]

  const display =()=>{
    switch(active){
      case 0:
        return <Home/>
      case 1:
        return <Shop/>
      case 2:
        return <Contact/>
    }
  }
  
  return (
    <div>
        <div className='flex items-center justify-between mx-[9rem] py-[3rem] border-b-[1px] border-gray-300'>
            <div className="flex items-center gap-x-2 border-b-[1px]   border-black">
            <FiSearch/>
            <input type="text" placeholder='Search here' className='  outline-none '/>
            </div>
            <Link to="/">
            <img src={logo} alt="" /></Link>
            <div className="flex items-center gap-x-4 text-[1.25rem]">
              <Link to="/auth-page">
                <div className=" flex items-center gap-x-2 ">
                  <FaUser />
                  Log in
                </div>
              </Link>

              <Link to="cart">
              <div className=" flex items-center gap-x-2">
                <div className="relative text-[30px]">
                <AiOutlineShoppingCart/>
                <div className="absolute bg-red-600 w-5 h-5 left-4 top-4 flex items-center justify-center rounded-full mx-auto text-white text-[0.9rem] ">0</div>
                </div>
                $0.00
              </div></Link>
            </div>
        </div>
        <div className="">
            <div className='flex items-center justify-center space-x-10 my-8 text-[1.2rem]'>
              {home?.map((prop, index)=>(
                <span key={index}
                className={`cursor-pointer ${active===index ? "text-gray-400": "text-black"}`} onClick={()=>setActive(index)}>
                  {prop}
                </span>
              ))}
            </div>
            <div className="">{display()}</div>
        </div>
    </div>
  )
}

export default Header

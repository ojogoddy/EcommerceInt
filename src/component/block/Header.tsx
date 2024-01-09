import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import {FaUser} from "react-icons/fa"
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {Link} from "react-router-dom"
import {MdMenu} from "react-icons/md"


const Header:React.FC = () => { 
  const [activeLink, setActiveLink] = useState("")
  const [menuBar, setMenuBar] = useState(false)
  return (
    <div>
        <div className='flex items-center justify-between mx-[9rem] py-[3rem] border-b-[1px] border-gray-300 sm:mx-[2rem] sm:py-[1.5rem] md:mx-[3rem]'>
            <div className="flex items-center gap-x-2 border-b-[1px]   border-black sm:hidden">
            <FiSearch/>
            <input type="text" placeholder='Search here' className='  outline-none '/>
            </div>
            <Link to="/">
            <img src={logo} alt="" /></Link>
            <div className="flex items-center gap-x-4 text-[1.25rem] sm:hidden">
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
            <div className=" hidden sm:flex md:hidden" onClick={()=> setMenuBar(!menuBar)} >
              <MdMenu size="30px"/>

              {menuBar && (
                <div className="absolute left-0 p-4 top-[84px] w-full bg-slate-100 pb-6 flex flex-col space-y-5">

<div className="   text-[1rem]">
            <Link to="/">
              <div onClick={()=> setActiveLink("home")} className={`p-4 ${activeLink === "home" ? "text-gray-400" : "text-black"}`}>HOME</div>
            </Link>
            <Link to="shop">
              <div onClick={()=> setActiveLink("shop")} className={`p-4 ${activeLink === "shop" ? "text-gray-400" : "text-black"}`}>SHOP</div>
            </Link>
            <Link to="contact">
              <div onClick={()=> setActiveLink("contact")} className={`p-4 ${activeLink === "contact" ? "text-gray-400" : "text-black"}`}>CONTACT</div>
            </Link>
          </div>

                  <div className="flex flex-col gap-x-4 text-[1.25rem]">
              <Link to="/auth-page">
                <div className=" flex items-center p-4 gap-x-2 ">
                  <FaUser />
                  Log in
                </div>
              </Link>

              <Link to="cart">
              <div className=" flex items-center p-4 gap-x-2">
                <div className="relative text-[30px]">
                <AiOutlineShoppingCart/>
                <div className="absolute bg-red-600 w-5 h-5 left-4 top-4 flex items-center justify-center rounded-full mx-auto text-white text-[0.9rem] ">0</div>
                </div>
                $0.00
              </div>
              </Link>
            </div>

            <div className="flex items-center p-4 gap-x-2 border-b-[1px] ">
                    <FiSearch/>
                  <input type="text" placeholder='Search here' className=' bg-transparent  outline-none '/>
                  </div>
              </div>
                
              )}
            </div>
        </div>
        <div className="">
          <div className="flex items-center justify-center space-x-10 my-8 text-[1.2rem] sm:text-[1rem] sm:space-x-6 sm:hidden">
            <Link to="/">
              <div onClick={()=> setActiveLink("home")} className={activeLink === "home" ? "text-gray-400" : "text-black"}>HOME</div>
            </Link>
            <Link to="shop">
              <div onClick={()=> setActiveLink("shop")} className={activeLink === "shop" ? "text-gray-400" : "text-black"}>SHOP</div>
            </Link>
            <Link to="contact">
              <div onClick={()=> setActiveLink("contact")} className={activeLink === "contact" ? "text-gray-400" : "text-black"}>CONTACT</div>
            </Link>
          </div>
        </div>

    </div>

  )
}

export default Header

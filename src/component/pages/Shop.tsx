import React from 'react'
import {Link} from "react-router-dom"
import { FaAngleRight } from "react-icons/fa";

const Shop = () => {
  return (
    <div>
      <div className="text-[4rem] font-extrabold text-center">Shop</div>
      <div className=" gap-x-2 flex items-center justify-center">
        <Link to="/">
          <div className="text-gray-400">
            Home
          </div>
        </Link>
        <div className=" text-gray-400">
        <FaAngleRight/>
        </div>
        <div className=" text-red-500">
          Shop
        </div>
      </div>
    </div>
  )
}

export default Shop
import React, { useState } from 'react'
import {Link} from "react-router-dom"
import { FaAngleRight } from "react-icons/fa";

import All from '../All';
import Women from '../Women';
import Men from '../Men';

const Shop:React.FC = () => {
  const all = ["All", "Men", "Women"]
  const [active, setActive] = useState(0)

  const shopping = ()=>{
    switch (active){
      case 0:
        return <All/>
      case 1:
        return <Men/>
      case 2:
        return <Women/>
    }
    return null
  }

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
      <div className="my-[4rem] flex items-center justify-center gap-x-8 text-[1.2rem] text-gray-400">
        {all?.map((prop, index)=>(
          <div key={index} className={`cursor-pointer ${active===index ? "text-black border-b-[1px] transition-all duration-300 ease-in border-black": "text-gray-400"}`} onClick={()=>setActive(index)}>
            {prop}
          </div>
        ))}
      </div>
      <div className=" flex flex-wrap  gap-y-6 justify-center gap-x-6">
        <div className="">{shopping()}</div>
      </div>
    </div>
  )
}

export default Shop
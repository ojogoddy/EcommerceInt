import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { alls } from "../../data";

const Shop = () => {
  const all = ["All", "Men", "Women"];
  const [active, setActive] = useState(0);
  return (
    <div>
      <div className="text-[4rem] font-extrabold text-center">Shop</div>
      <div className=" gap-x-2 flex items-center justify-center">
        <Link to="/">
          <div className="text-gray-400">Home</div>
        </Link>
        <div className=" text-gray-400">
          <FaAngleRight />
        </div>
        <div className=" text-red-500">Shop</div>
      </div>
      <div className="my-[4rem] flex items-center justify-center gap-x-8 text-[1.2rem] text-gray-400">
        {all?.map((prop, index) => (
          <div
            key={index}
            className={`cursor-pointer ${
              active === index
                ? "text-black border-b-[1px] transition-all duration-300 ease-in border-black"
                : "text-gray-400"
            }`}
            onClick={() => setActive(index)}
          >
            {prop}
          </div>
        ))}
      </div>
      <div className=" flex flex-wrap  justify-center gap-x-6">
        {alls?.map((prop:any) =>(
          <div key={prop.id} className="pb-5">
            <div className="w-[300px] h-[300px]">
              <img
                src={prop.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className=" text-center text-[1.2rem] font-semibold">
              {prop.name}
            </div>
            <div className="text-center font-light text-[1.1rem] text-gray-400">
              {prop.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;

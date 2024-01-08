import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="h-[60px] w-[100vw] flex items-center justify-between gap-[35px] bg-[white] p-5 overflow-hidden">
      <div className="w-[250px] h-[40px] border-2 border-[black] flex items-center gap-5 p-2">
        <BsSearch />
        <input name="text" type="search" placeholder="Sesrch here" />
      </div>
      <div className="w-[250px] h-[40px]"></div>
      <div className="w-[250px] h-[40px] flex items-center jus ">
        <div className="">
          <FaUser />
        </div>
        <div>
          <FaCartShopping />
        </div>
      </div>
    </div>
  );
};

export default Header;

import {Link} from "react-router-dom"
import { FaAngleRight } from "react-icons/fa";

const Cart = () => {
 

  return (
    <div className="px-[9rem] ">
      <div className="text-[4rem] font-extrabold text-center">
        Cart
      </div>
      <div className=" gap-x-2 flex items-center justify-center">
        <Link to="/">
          <div className="text-gray-400">
            Home
          </div>
        </Link>
        <div className=" text-gray-400">
        <FaAngleRight/>
        </div>
        <Link to="/shop">
        <div className=" text-gray-400">
          Shop
        </div>
        </Link>
        <div className=" text-gray-400">
        <FaAngleRight/>
        </div>
        <div className=" text-black">
          Cart
        </div>
      </div>
      <div className="text-[2.2rem] font-bold">Your Cart Items</div>
      <div className="flex items-center justify-between text-gray-400 px-[5rem] mt-5 border-b-2 pb-3">
        <div className="">PRODUCT</div>
        <div className="flex items-center gap-x-12">
          <div className="">PRICE</div>
          <div className="">QUANTITY</div>
          <div className="">TOTAL</div>
        </div>
      </div>
      <div className="">
      <div className="flex items-center justify-between px-[5rem]  border-b-2 py-3">
        <div className=" text-[1.2rem] flex items-center  gap-x-3">
          <div className=" w-[100px] h-[100px] bg-red-300">
            <img src="" alt="" />
          </div>
          Drop Pendant Necklace
        </div>
        <div className="flex items-center gap-x-12">
          <div className="">$19.99</div>
          <div className="border-[1px] rounded-3xl px-6 py-2 ">1</div>
          <div className="">$19.99</div>
        </div>
      </div>
      <div className=" flex justify-end">
      <Link to="/shop">
      <button className="border-[1px] px-6 py-4 mt-4 flex items-center justify-end rounded-3xl hover:bg-red-500 hover:text-white ">Continue Shopping</button></Link>
      </div>
      <div className=" flex justify-end">
      <button className="border-[1px] px-6 py-4 mt-4 flex items-center justify-end rounded-3xl hover:bg-red-500 hover:text-white "> PROCEED TO CHECKOUT</button>
      </div>

      </div>

             
    </div>
  );
};

export default Cart;

import {Link} from "react-router-dom"
import { FaAngleRight } from "react-icons/fa";
import a from "../../assets/a.jpeg"
import b from "../../assets/b.jpeg"

const Cart = () => {

  const cartList:any = [
    {
      id: 1,
      product: a,
      name: "Gold Watch",
      price: "$10",
      quantity: "1",
      total: "$10",
    },
    {
      id: 2,
      product: b,
      name: "Drop Pendant Necklace",
      price: "$10",
      quantity: "1",
      total: "$10",
    },
  ]
 

  return (
    <div className="px-[9rem] sm:px-[3rem] ">
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
      <div className="text-[2.2rem] font-bold text-center mt-5">Your Cart Items</div>
      <div className="flex items-center justify-between text-gray-400 px-[5rem] mt-5 border-b-2 pb-3 sm:px-0 ">
        <div className="">PRODUCT</div>
        <div className="flex items-center gap-x-12 sm:gap-x-2">
          <div className="">PRICE</div>
          <div className="">QUANTITY</div>
          <div className="">TOTAL</div>
        </div>
      </div>
      <div className="">
        {cartList?.map((prop:any)=>(
          <div className="" key={prop.id}>
<div className="flex items-center sm:items-start justify-between px-[5rem]  border-b-2 py-3 sm:px-0">
        <div className=" text-[1.2rem] sm:text-[1rem] flex items-center sm:flex-col gap-x-3 sm:items-start">
          <div className=" w-[100px] h-[100px]">
            <img src={prop.product} alt="" />
          </div>
          {prop.name}
        </div>
        <div className="flex items-center gap-x-12 sm:gap-x-2">
          <div className="">{prop.price}</div>
          <div className="border-[1px] rounded-3xl px-6 py-2 ">{prop.quantity}</div>
          <div className="">{prop.total}</div>
        </div>
      </div>
          </div>
        ))}
      
      <div className=" flex justify-end">
      <Link to="/shop">
      <button className="border-[1px] px-6 py-4 mt-4 flex items-center justify-end rounded-3xl hover:bg-red-500 hover:text-white sm:px-5 sm:py-3 ">Continue Shopping</button></Link>
      </div>
      <div className=" flex justify-end">
      <button className="border-[1px] px-6 py-4 mt-4 flex items-center justify-end rounded-3xl hover:bg-red-500 hover:text-white sm:px-5 sm:py-3 "> PROCEED TO CHECKOUT</button>
      </div>

      </div>

             
    </div>
  );
};

export default Cart;

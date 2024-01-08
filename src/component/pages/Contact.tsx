
import map from "../../assets/hero1.jpg"
import { IoIosPhonePortrait } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
const ContactUs = () => {
  return (
    <div className="w-full h-screen flex justify-between items-center p-[40px]">
<div className="w-[45%] h-[100%] flex justify-center items-center flex-col flex-wrap ml-[30px]">
<div className="flex justify-between w-[100%]">
   <div className="pl-[10px] ">
   <div className="text-[45px] text-[#CC3333] mb-[20px]"><IoIosPhonePortrait /></div>
   <h3 className="text-[15px] font-bold text-black text-left mb-[20px]">Phone</h3>
    <p className="text-[13px] font-medium text-gray-500 text-left mb-[5px]">(0091) 8547 632521</p>
    <p className="text-[13px] font-medium text-gray-500 text-left">(084) 965 4788</p>
   </div>
   <div className="pl-[10px] ">
   <div className="text-[45px] text-[#CC3333] mb-[20px]"><SlLocationPin /></div>
   <h3 className="text-[15px] font-bold text-black text-left mb-[20px]">Address</h3>
    <p className="text-[13px] font-medium text-gray-500 text-left mb-[5px]">69 Halsey St, New York,</p>
    <p className="text-[13px] font-medium text-gray-500 text-left">Ny 10002, USA</p>
   </div>
   <div className="pl-[10px] ">
   <div className="text-[45px] text-[#CC3333] mb-[20px]"><MdOutlineMail /></div>
   <h3 className="text-[15px] font-bold text-black text-left mb-[20px]">Email</h3>
    <p className="text-[13px] font-medium text-gray-500 text-left mb-[5px]">support@domain.com</p>
    <p className="text-[13px] font-medium text-gray-500 text-left mr-[30px]">hello@domain.com</p>
   </div>
</div>
<div className="mt-[100px] w-full">
    <h1 className="text-left font-light text-[40px] mb-[40px]">Keep In Touch With Us</h1>
  <div className="flex justify-between items-center">
    
  <div className={`flex items-center  border-b-[1px] border-gray-300 bg-transparent outline-none w-[180px] font-light text-[12px] pb-[10px] text-gray-600  
    `} >
      
      <input className="border-none outline-none placeholder-black" type="search" placeholder="Enter Your Name" />
    </div>
    <div className={`flex items-center  border-b-[1px] border-gray-300  bg-transparent outline-none w-[180px] font-light text-[12px] pb-[10px] text-gray-600  
    `} >
      
      <input className="border-none outline-none placeholder-black" type="search" placeholder="Enter Your Email" />
    </div>
    <div className={`flex items-center  border-b-[1px] border-gray-300  bg-transparent outline-none w-[180px] font-light text-[12px] pb-[10px] text-gray-600  
    `} >
      
      <input className="border-none outline-none placeholder-black" type="search" placeholder="Subject(Optional)" />
    </div>

  </div>
  <div className="text-left mt-[100px]">
    <textarea className="outline-none border-b-[1px] border-gray-300 w-[300px]" name="" placeholder="Enter Message" ></textarea>
  </div>
<p className="mt-[50px] text-left capitalize text-[13px] font-extrabold">
<a className="underline text-black " href="">SEND MESSAGE </a>
</p>
</div>
</div>
<div  className="w-[45%] h-[100%] ml-[30px]" >
    <img className="w-[100%] h-[100%] object-cover" src={map} alt="" />
</div >
    </div>
  )
};

export default ContactUs;

import logo from "../../assets/logo.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Footer = () => {
  return (
    <div>
      <div className='flex items-center justify-between px-[9rem] py-[3rem] border-t-[1px] border-gray-300'>
        <div className=" flex items-center gap-x-6">
          <div className="">POLICY</div>
          <div className="">TERMS & CONDITIONS</div>
          <div className="">HELP</div>
        </div>
        <img src={logo} alt="" />
        <div className='flex items-center gap-x-10'>
          <div className="">FOLLOW US ON SOCIAL</div>
          <div className="flex items-center gap-x-2">
            <FaFacebookF/>
            <FaTwitter/>
            <TiSocialGooglePlus/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
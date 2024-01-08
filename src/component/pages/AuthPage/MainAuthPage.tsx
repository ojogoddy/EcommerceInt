import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const MainAuthPage = () => {
  const [show1, setShow1] = useState<boolean>(true);
  const [show2, setShow2] = useState<boolean>(false);

  const ToggleLogin = () => {
    setShow1(!show1);
    setShow2(false);
  };

  const ToggleRegister = () => {
    setShow1(false);
    setShow2(!show2);
  };

  return (
    <div className="bg-[#666666] h-[100vh] w-[100%] overflow-hidden flex items-center justify-center">
      <div className="h-[95%] w-[85%] rounded-[35px]  flex items-center justify-between">
        <div
          className="h-[100%] w-[28%] bg-cover bg-right-bottom relative flex items-center justify-center rounded-[10px]"
          style={{
            backgroundImage:
              "url(https://drfurithemes.com/mrbara15/wp-content/uploads/sites/37/2023/01/mr-login-popup.jpg)",
          }}
        >
          <div className="z-20 text-[white] absolute flex items-center flex-col ">
            <div className="text-[40px] hover:cursor-pointer" 
            onClick={ToggleLogin}
            >Log in</div>
            <div className="text-[40px] hover:cursor-pointer"
            onClick={ToggleRegister}
            >Register</div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        </div>
        <div className="bg-[white] w-[72%] h-[100%] flex items-center justify-center ">
      {
        show1? <Login/>:null
      }
      {
        show2? <SignUp/>:null
      }
          
        </div>
      </div>
    </div>
  );
};

export default MainAuthPage;

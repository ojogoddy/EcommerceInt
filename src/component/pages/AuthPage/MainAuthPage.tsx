import { useState } from "react";

const MainAuthPage = () => {
  const [show1, setShow1] = useState<boolean>(true);
  const [show2, setShow2] = useState<boolean>(false);

  return (
    <div className="bg-[#212121] h-[100vh] w-[100%] overflow-hidden flex items-center justify-center">
      <div className="bg-[peru] h-[95%] w-[85%] rounded-[15px]  flex items-center justify-between">
        <div
          className="h-[100%] w-[28%] bg-cover bg-right-bottom relative flex items-center justify-center"
          style={{
            backgroundImage:
              "url(https://drfurithemes.com/mrbara15/wp-content/uploads/sites/37/2023/01/mr-login-popup.jpg)",
          }}
        >
          <div className="z-20 text-[white] absolute flex items-center flex-col ">
            <div className="text-[40px] hover:cursor-pointer">Log in</div>
            <div className="text-[40px] hover:cursor-pointer">Register</div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        </div>
        <div className="bg-[brown] w-[72%] h-[100%]">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          tenetur assumenda magni. Excepturi ab odit fugit consequatur iste,
          officia ipsam? Ipsam, quod. Et, nesciunt maxime nam suscipit
          repudiandae dolorum rem?
        </div>
      </div>
    </div>
  );
};

export default MainAuthPage;

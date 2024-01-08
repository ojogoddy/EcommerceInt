const Login = () => {
  return (
    <div className="h-[70%] w-[80%] p-[10px]">
      <h1 className="text-[30px]">Log in your account</h1>

      <div className="mt-[40px]">
        <div>
          <input
            className="w-[95%] border-none outline-none rounded px-1 h-[45px]"
            required
            maxLength={50}
            type="email"
            placeholder="Username or email address"
          />
          <hr />
        </div>
        <div className="mt-[30px]">
          <input
            className="w-[95%] border-none outline-none rounded px-1 h-[45px]"
            required
            maxLength={50}
            type="email"
            placeholder="Password"
          />
          <hr />
        </div>
      </div>

      <div className=" w-[100%] flex items-center justify-between mt-[25px]">
        <div>
          
          Keep me logged out</div>
        <div
        className="text-[#84DFE1] hover:cursor-pointer"
        >Forgot your Password</div>
      </div>

      <button
      className="bg-[#CC0000] mt-[25px] w-[150px] text-[white] h-[45px] rounded-[50px] hover:bg-[#333333]"
      >LOG IN</button>
    </div>
  );
};

export default Login;

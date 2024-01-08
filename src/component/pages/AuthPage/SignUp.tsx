

const SignUp = () => {
  return (
    <div className="h-[70%] w-[80%] p-[10px]">
      <h1 className="text-[30px]">Register your account</h1>

      <div className="mt-[40px]">
        <div>
          <input
            className="w-[95%] border-none outline-none rounded px-1 h-[45px]"
            required
            maxLength={50}
            type="email"
            placeholder="Username"
          />
          <hr />
        </div>
        <div className="mt-[30px]">
          <input
            className="w-[95%] border-none outline-none rounded px-1 h-[45px]"
            required
            maxLength={50}
            type="email"
            placeholder="Email Address"
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
        <div className="mt-[30px]">
          <input
            className="w-[95%] border-none outline-none rounded px-1 h-[45px]"
            required
            maxLength={50}
            type="email"
            placeholder="Confirm Password"
          />
          <hr />
        </div>
      </div>

   

      <button
      className="bg-[#CC0000] mt-[25px] w-[150px] text-[white] h-[45px] rounded-[50px] hover:bg-[#333333]"
      >Register</button>
    </div>
  );
};

export default SignUp;

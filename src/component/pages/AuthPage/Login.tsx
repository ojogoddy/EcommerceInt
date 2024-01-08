import Swal from "sweetalert2";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../Global/ReduxState";
import {  loginUsers } from "../../../api/ApiCalls";
import { UseAppDispatch } from "../../../Global/Store";


const Login = () => {

  const dispatch = UseAppDispatch();

  const navigate = useNavigate();

  const userSchema = yup
    .object({
      email: yup.string().required("please enter a email"),
      password: yup.string().required("please enter a password"),
    })
    .required();

  type formData = yup.InferType<typeof userSchema>;

  const {
    handleSubmit,
    register,
  } = useForm<formData>({
    resolver: yupResolver(userSchema),
  });

  const post = useMutation({
    mutationKey: ["loginUser"],
    mutationFn: loginUsers,

    onSuccess: (data) => {
      // dispatch(loginUser(data));
      console.log(data)
    },
  });

  const submit = handleSubmit((data) => {
    post.mutate(data);
          dispatch(loginUser(data));
   
    navigate("/cart");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "signed up successfully",
        showConfirmButton: false,
        timer: 2500,
      });

    
  });
  return (



    <form onSubmit={submit} className="h-[70%] w-[80%] p-[10px]">
      <h1 className="text-[30px]">Log in your account</h1>

      <div className="mt-[40px]">
        <div>
          <input
             {...register("email")}
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
             {...register("password")}
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

      <button type="submit"
      className="bg-[#CC0000] mt-[25px] w-[150px] text-[white] h-[45px] rounded-[50px] hover:bg-[#333333]"
      >LOG IN</button>
    </form>
  );
};

export default Login;

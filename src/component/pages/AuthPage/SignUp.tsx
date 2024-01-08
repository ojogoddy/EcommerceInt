import Swal from "sweetalert2";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../Global/ReduxState";
import { createUser } from "../../../api/ApiCalls";
import { UseAppDispatch } from "../../../Global/Store";

const SignUp = () => {

  const dispatch = UseAppDispatch();

  const navigate = useNavigate();

  const userSchema = yup
    .object({
      name: yup.string().required("please enter a name"),
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
    mutationKey: ["postUser"],
    mutationFn: createUser,

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
      <h1 className="text-[30px]">Register your account</h1>

      <div className="mt-[40px]">
        <div>
          <input
           {...register("name")}
            className="w-[95%] border-none outline-none rounded px-1 h-[45px]"
            required
            maxLength={50}
            type="text"
            placeholder="Username"
          />
          <hr />
        </div>
        <div className="mt-[30px]">
          <input
          {...register("email")}
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
           {...register("password")}
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
      type="submit"
      className="bg-[#CC0000] mt-[25px] w-[150px] text-[white] h-[45px] rounded-[50px] hover:bg-[#333333]"
      >Register</button>
    </form>
  );
};

export default SignUp;

import axios from "axios";
import { userData } from "../Global/ReduxState";

// const endPoints = "http://localhost:4573/api";
export const endPoint = "https://bara-ecommerce-api.onrender.com/api";


export const createUser = async ({ name, email, password }:userData) => {
  await axios
    .post(`${endPoint}/users/register`, {
      name,
      email,
      password,
    })
    .then((res) => res.data);
};
export const loginUsers = async ({  email, password }:userData) => {
  await axios
    .post(`${endPoint}/users/login`, {
      email,
      password,
    })
    .then((res) => res.data);
};

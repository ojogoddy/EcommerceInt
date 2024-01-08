import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface userData {
  name?: string;
  email: string;
  password: string;
  _id?: string;
}

export interface cartData {
id:number,
name : string,
image: string,
price : string
cartQuantity: number;
}

const initialState = {
  currentUser: {} as userData | null,
  cart: [] as Array<cartData>,
  totalPrice: 0,
  totalQuantity: 0,
};

const ReduxState = createSlice({
  name: "SWMG",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<userData>) => {
      state.currentUser = payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
    },
    addToCart: (state, { payload }: PayloadAction<cartData>) => {
      const check = state.cart.findIndex((el) => el.id === payload.id);

      if (check >= 0) {
        state.cart[check].cartQuantity += 1;
      } else {
        state.cart.push({
          ...payload,
          cartQuantity: 1,
        });
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, { payload }: PayloadAction<cartData>) => {
      const check = state.cart.findIndex((el) => el.id === payload.id);

      if (state.cart[check].cartQuantity > 1) {
        state.cart[check].cartQuantity -= 1;
      } else {
        state.cart = state.cart.filter((el) => el.id !== payload.id);
      }

      state.totalQuantity -= 1;
    },
    remove: (state, { payload }: PayloadAction<cartData>) => {
      state.cart = state.cart.filter((el) => el.id !== payload.id);
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addToCart,
  clearCart,
  removeFromCart,
  remove,
} = ReduxState.actions;

export default ReduxState.reducer;
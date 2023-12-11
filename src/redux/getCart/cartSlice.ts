import { createSlice } from "@reduxjs/toolkit"
import { CartItem, Product } from "../../types/ResponseTypes" 
import { RootState } from "../store"
import getCartListAction from "./middleware"

const INITIAL_STATE: { cart: CartItem[] } = {
  cart: []
}

const cartSlice = createSlice({
  name: "cartList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartListAction.fulfilled, (state, { payload }) => ({
      ...state,
      cart: payload.data
    }
    ))
  }
})

export const cartSelector = (state: RootState) => state?.Cart

export default cartSlice.reducer
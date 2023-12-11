import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types/ResponseTypes"
import getAllProductAction from "./middleware"
import { RootState } from "../store"

const INITIAL_STATE: { product: Product[] } = {
  product: []
}

const productSlice = createSlice({
  name: "productList",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProductAction.fulfilled, (state, { payload }) => ({
      ...state,
      product: payload.data
    }
    ))
  }
})

export const productSelector = (state: RootState) => state?.Product

export default productSlice.reducer
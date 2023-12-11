import { createAsyncThunk } from "@reduxjs/toolkit"

import { AxiosResponse } from "axios"
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice"
import getCartList from "./services"
import { defaultMessageObj } from "../lem/types"
import { CartResponseModel } from "../../types/ResponseTypes"

const getCartListAction = createAsyncThunk<
  CartResponseModel
>(
  "getCartList",
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response: AxiosResponse<CartResponseModel> = await getCartList()
      if (response?.data.status === 200) {
        dispatch(hideLoader())
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        })
      )
      return rejectWithValue(response.data)
    } catch (error: unknown) {
      dispatch(hideLoader())
      return rejectWithValue(error as Error)
    }
  }
)

export default getCartListAction
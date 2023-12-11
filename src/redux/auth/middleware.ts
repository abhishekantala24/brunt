import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginWithEmailAsync } from "./services"
import { LoginResponseModel } from "../../types/ResponseTypes"
import { LoginRequestModel } from "../../types/RequestTypes"
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice"
import { defaultMessageObj } from "../lem/types"
import { AxiosResponse } from "axios"

export const logoutAction = createAsyncThunk<
  boolean,
  boolean
>(
  "auth/logout", () => {
    return true
  }
)

export const loginUserByEmailAction = createAsyncThunk<
  LoginResponseModel, LoginRequestModel
>(
  "auth/loginByEmail",
  async (loginRequest: LoginRequestModel, { rejectWithValue, dispatch }) => {
    dispatch(showLoader({ loading: true, message: "happening" }))
    try {
      const response: AxiosResponse<LoginResponseModel> = await loginWithEmailAsync(loginRequest)
      dispatch(hideLoader())
      if (response?.data?.status === 200) {
        return response?.data
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: response?.data?.message,
        }))
      return rejectWithValue(response)
    } catch (error: unknown) {
      return rejectWithValue(error as Error)
    }
  }
)

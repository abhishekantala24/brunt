import { createAsyncThunk } from "@reduxjs/toolkit"

import { loginWithEmailAsync, logoutActionAsync } from "./services"
import { removeUser } from "../../services/token"
import { LoginResponseModel, LogoutResponseModel } from "../../types/ResponseTypes"
import { LoginRequestModel, LogoutRequestModel } from "../../types/RequestTypes"
import { hideLoader, showLoader, showMessage } from "../lem/lemSlice"
import { defaultMessageObj } from "../lem/types"
import { AxiosResponse } from "axios"

export const logoutAction = createAsyncThunk
  <LogoutResponseModel, LogoutRequestModel
  >("auth/logout",
    async (request: LogoutRequestModel, { rejectWithValue, dispatch }) => {
      removeUser()
      dispatch(showLoader({ loading: true, message: "happening" }))
      try {
        const response: AxiosResponse<LogoutResponseModel> = await logoutActionAsync(request)
        dispatch(hideLoader())
        if (response.data.isSuccess) {
          dispatch(
            showMessage({
              ...defaultMessageObj,
              type: "success",
              messageText: "Logout Successfully",
            }))
          return response?.data
        }
        dispatch(
          showMessage({
            ...defaultMessageObj,
            type: "error",
            messageText: "something went wrong",
          }))
        window.location.href = '/'
        return rejectWithValue(response)
      } catch (error: unknown) {
        return rejectWithValue(error as Error)
      }
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
      if (response?.status === 200) {
        if (response?.data?.response === 1) {
          return response?.data
        } else {
          dispatch(
            showMessage({
              ...defaultMessageObj,
              type: "error",
              messageText: response?.data?.responsemassage,
            }))
          return response?.data
        }
      }
      dispatch(
        showMessage({
          ...defaultMessageObj,
          type: "error",
          messageText: "something went wrong",
        }))
      return rejectWithValue(response)
    } catch (error: unknown) {
      return rejectWithValue(error as Error)
    }
  }
)

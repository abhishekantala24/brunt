import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { getUser } from "../../services/token"
import { logoutAction, loginUserByEmailAction } from "./middleware"
import { LoginResponseModel } from "../../types/ResponseTypes"

const INITIAL_STATE: LoginResponseModel = {
  token: getUser() || undefined,
  response: 0,
  responsemassage: "",
  userDetails: null
}

const authSlice = createSlice({
  name: "auth/logout",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, (state) => ({
      ...state,
      token: undefined,
      userDetails: undefined,
    }))
    builder.addCase(loginUserByEmailAction.fulfilled, (state, { payload }) => ({
      ...state,
      token: payload.token,
      userDetails: payload.userDetails
    }))
  },
})

export const authSelector = (state: RootState) => state?.Auth

export default authSlice.reducer
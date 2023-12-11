import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../store"
import { logoutAction, loginUserByEmailAction } from "./middleware"
import { AuthResponse } from "../../types/ResponseTypes"

const INITIAL_STATE: AuthResponse = {
  token: "",
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
  id: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(logoutAction.fulfilled, (state) => ({
      ...state,
      token: undefined,
      email: undefined,
      firstName: undefined,
      lastName: undefined,
      phone: undefined,
      id: undefined,
    }))
    builder.addCase(loginUserByEmailAction.fulfilled, (state, { payload }) => ({
      ...state,
      token: payload.data.token,
      email: payload.data.email,
      firstName: payload.data.firstName,
      lastName: payload.data.lastName,
      phone: payload.data.phone,
      id: payload.data.id,
    }
    ))
  },
})

export const authSelector = (state: RootState) => state?.Auth

export default authSlice.reducer
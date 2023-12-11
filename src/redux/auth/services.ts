import axiosInstance, { isAxiosError } from "../../services/api"
import { setUser } from "../../services/token"
import { LoginRequestModel, LogoutRequestModel } from "../../types/RequestTypes"
import { LoginResponseModel } from "../../types/ResponseTypes"
import { config } from "../../utils/config"

export const loginWithEmailAsync = async (loginRequest: LoginRequestModel) => {
  try {
    const response = await axiosInstance.post<LoginResponseModel>(`${config.apiURL}/auth/login`, loginRequest)

    setUser(response?.data?.data?.token)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export const logoutActionAsync = async (loginRequest: LogoutRequestModel) => {
  try {
    const response = await axiosInstance.post<LoginResponseModel>(`${config.apiURL}/api/Login/Logout`, loginRequest)

    return response
  } catch (err) {
    return isAxiosError(err)
  }
}
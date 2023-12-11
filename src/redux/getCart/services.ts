// All the APIs and service related configuration
import axiosInstance, { isAxiosError } from "../../services/api"
import { ProductResponseModel } from "../../types/ResponseTypes"
const getCartListRoute = "/customer/getCartData"

const getCartList = async () => {
  try {
    const response = await axiosInstance.get<ProductResponseModel>(getCartListRoute)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export default getCartList
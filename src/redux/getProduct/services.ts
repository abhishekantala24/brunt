// All the APIs and service related configuration
import axiosInstance, { isAxiosError } from "../../services/api"
import { ProductResponseModel } from "../../types/ResponseTypes"
const getAllProductRoute = "/product"

const getAllProduct = async () => {
  try {
    const response = await axiosInstance.get<ProductResponseModel>(getAllProductRoute)
    return response
  } catch (err) {
    return isAxiosError(err)
  }
}

export default getAllProduct
import { combineReducers } from "redux"

import authReducer from "./auth/authSlice"
import lemReducer from "./lem/lemSlice"
import productReducer from "./getProduct/productSlice"
import cartReducer from "./getCart/cartSlice"
import stateReducer from "./state/stateSlice"

const reducer = combineReducers({
  Auth: authReducer,
  Product: productReducer,
  Cart: cartReducer,
  Lem: lemReducer,
  State: stateReducer,
})

export default reducer
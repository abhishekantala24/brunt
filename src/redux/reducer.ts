import { combineReducers } from "redux"

import authReducer from "./auth/authSlice"
import lemReducer from "./lem/lemSlice"
import stateReducer from "./state/stateSlice"

const reducer = combineReducers({
  Auth: authReducer,
  Lem: lemReducer,
  State: stateReducer,
})

export default reducer
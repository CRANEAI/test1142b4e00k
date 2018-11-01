import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import composite from "./reducer_composite"
import live from "./reducer_live"
import sign_up from "./reducer_sign_up"
import search from "./reducer_search"

const rootReducer = combineReducers({
  composite: composite,
  live: live,
  sign_up: sign_up,
  search: search
})

export default rootReducer

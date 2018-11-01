import { combineReducers } from "redux"
import { reducer as Form } from "redux-form"

import live from "./reducer_live"
import sign_up from "./reducer_sign_up"
import search from "./reducer_search"
import composite from "./reducer_composite"

const rootReducer = combineReducers({
  live: live,
  sign_up: sign_up,
  search: search,
  composite: composite
})

export default rootReducer

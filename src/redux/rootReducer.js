import {combineReducers} from "redux"
import cakeReducer from "./cakes/cakeReducer"
import iceCreamReducer from "./icecream/iceCreamreducer"

const rootReducer =combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})
export default rootReducer
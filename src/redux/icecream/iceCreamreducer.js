import buyIceCream from "./iceCreamAction"
import {BUY_ICECREAM} from "./iceCreamtype"
const initialState={
    numOFIceCreams :20
}

const iceCreamReducer =(state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numOFIceCreams:state.numOFIceCreams -1
            }
        default: 
         return state
    }
}
export default iceCreamReducer
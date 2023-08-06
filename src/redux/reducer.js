import { GET_PRODUCTS } from "./actions/types";
const initialState = {
  products: []
}

export default function rootReducer(state = initialState,{type,payload}){
  switch (type) {
    case GET_PRODUCTS:
      return{
        ...state,
        products:payload
      }

    default:
      return state;
  }
}
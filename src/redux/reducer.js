import { GET_PRODUCTS, SET_FLAG,GET_PRODUCTS_BY_CAT,GET_CAT,GET_SUBCAT,GET_PRODUCTS_BY_SUBCAT,GET_ORDER_BY_AZ,GET_ORDER_BY_ZA,GET_ORDER_BY_MAYOR,GET_ORDER_BY_MENOR,GET_ORDER_BY_NAME } from "./actions/types";
const initialState = {
  products: [],
  category: [],
  subCategory: [],
  flag: false,

}

export default function rootReducer(state = initialState,{type,payload}){
  switch (type) {
    case GET_PRODUCTS:
      return{
        ...state,
        products:[...payload]
      }
    case SET_FLAG:
      return{
        ...state,
        flag:payload
      }
    case GET_PRODUCTS_BY_CAT:
      return{
        ...state,
        products:[...payload]
      }
    case GET_PRODUCTS_BY_SUBCAT:
      return{
        ...state,
        products:[...payload]
      }
    case GET_ORDER_BY_NAME:
      return{
        ...state,
        products:[...payload]
      }
    case GET_CAT:
      return{
        ...state,
        category:[...payload]
      }
    case GET_SUBCAT:
      return{
        ...state,
        subCategory:[...payload]
      }
    case GET_ORDER_BY_AZ:
      return{
        ...state,
        products:[...payload]
      }
    case GET_ORDER_BY_ZA:
      return{
        ...state,
        products:[...payload]
      }
    case GET_ORDER_BY_MAYOR:
      return{
        ...state,
        products:[...payload]
      }
    case GET_ORDER_BY_MENOR:
      return{
        ...state,
        products:[...payload]
      }

    default:
      return state;
  }
}
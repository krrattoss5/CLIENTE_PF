import { GET_PRODUCTS, SET_FLAG,GET_PRODUCTS_BY_CAT,GET_CAT,GET_SUBCAT,GET_PRODUCTS_BY_SUBCAT,GET_ORDER_BY_AZ,GET_ORDER_BY_ZA,GET_ORDER_BY_MAYOR,GET_ORDER_BY_MENOR,GET_ORDER_BY_NAME,ADD_CAR_PRODUCT,DELETE_CAR_PRODUCT, ADD_STORAGE_PRODCTS, GET_PRODUCT_BY_ID, NEXT, BACK, FORCE_CURRENT } from "./actions/types";
const initialState = {
  products: [],
  productById: [],
  category: [],
  subCategory: [],
  flag: false,
  car:[],
  paginateCurrency:1
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
    case ADD_CAR_PRODUCT:
      return{
        ...state,
        car:[...state.car,payload]
      }
    case DELETE_CAR_PRODUCT:
      let aux = state.car.filter((p)=>p.id !== payload)
      return{
        ...state,
        car:aux
      }
    case ADD_STORAGE_PRODCTS:
      return{
        ...state,
        car:payload
      }
    case GET_PRODUCT_BY_ID:
      return{
        ...state,
        productById:payload
      }
    case NEXT:
      return{
        ...state,
        paginateCurrency: state.paginateCurrency + 1
      }
    case BACK:
      return{
        ...state,
        paginateCurrency: state.paginateCurrency - 1
      }
    case FORCE_CURRENT:
      return{
        ...state,
        paginateCurrency:payload
      }

    default:
      return state;
  }
}
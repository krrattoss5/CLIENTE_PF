import { GET_PRODUCTS } from "./types";
import axios from "axios";

export function getProducts(){
  const endPoint = 'https://api-mundo-gym.onrender.com/products/'
  return async (dispatch)=>{
    await axios.get(endPoint)
    .then(({data})=>{
      return dispatch({
        type:GET_PRODUCTS,
        payload:data
      })
    })
  }
}
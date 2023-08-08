import { GET_PRODUCTS, SET_FLAG,GET_PRODUCTS_BY_CAT,GET_CAT,GET_SUBCAT,GET_PRODUCTS_BY_SUBCAT,GET_ORDER_BY_AZ,GET_ORDER_BY_ZA,GET_ORDER_BY_MAYOR,GET_ORDER_BY_MENOR,GET_ORDER_BY_NAME } from "./types";
import axios from "axios";
import Swal from "sweetalert2";

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
export function setFlag(f){
  return{
    type:SET_FLAG,
    payload:f
  }
}
  export function getProdsByCat(cat){
    return async (dispatch)=>{
      await axios(`https://api-mundo-gym.onrender.com/filterByCategory?category=${cat}`)
      .then(({ data }) =>{
        return dispatch({
          type:GET_PRODUCTS_BY_CAT,
          payload:data
        })
      });
    }
  };
  export function getCat(){
    return async (dispatch)=>{
      await axios("https://api-mundo-gym.onrender.com/category")
      .then(({ data }) => {
        return dispatch({
          type:GET_CAT,
          payload:data
        });
      });
    }
  };
  export function getSubCats(){
    return async (dispatch)=>{
      await axios("https://api-mundo-gym.onrender.com/subcategory").then(({ data }) =>{
        return dispatch({
          type:GET_SUBCAT,
          payload:data
        })
      });
    }
  };
  export function getProdsBySubCat(subCat){
    return async (dispatch)=>{
      await axios(`https://api-mundo-gym.onrender.com/filterSub?subcategory=${subCat}`).then(({ data }) =>{
        return dispatch({
        type:GET_PRODUCTS_BY_SUBCAT,
        payload:data
      })
    });
  }
};
export function getOrderAlphabeticAZ(){
  return async (dispatch)=>{
    await axios.get(`https://api-mundo-gym.onrender.com/order/alphabetic/AZ`)
    .then(({data})=>{
      return dispatch({
        type:GET_ORDER_BY_AZ,
        payload:data
      })
    })
  };
};
export function getOrderAlphabeticZA(){
  return async (dispatch)=>{
    await axios.get(`https://api-mundo-gym.onrender.com/order/alphabetic/ZA`)
    .then(({data})=>{
      return dispatch({
        type:GET_ORDER_BY_ZA,
        payload:data
      })
    })
  };
};
export function getOrderPriceMm(){
  return async (dispatch)=> {
    await axios.get(`https://api-mundo-gym.onrender.com/order/price/Mm`)
    .then(({data})=>{
      return dispatch({
        type:GET_ORDER_BY_MAYOR,
        payload:data
      })
    })
  };
};
export function getOrderPricemM(){
  return async (dispatch)=> {
    await axios.get(`https://api-mundo-gym.onrender.com/order/price/mM`)
    .then(({data})=>{
      return dispatch({
        type:GET_ORDER_BY_MENOR,
        payload:data
      })
    })
  };
};
export function getProductByName(name){
  return async (dispatch)=>{
    try {
      await axios(`https://api-mundo-gym.onrender.com/products?name=${name}`)
    .then(({ data }) =>{
      dispatch(setFlag(`search/${name}`));
      return dispatch({
        type:GET_ORDER_BY_NAME,
        payload:data
      })
    });
    } catch (error) {
      return Swal.fire({
        position: "top",
        icon: "warning",
        title: "Producto no encontrado!",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
};
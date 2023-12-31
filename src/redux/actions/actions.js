import { GET_PRODUCTS,
          SET_FLAG,
          GET_PRODUCTS_BY_CAT,
          GET_CAT,
          GET_SUBCAT,
          GET_PRODUCTS_BY_SUBCAT,
          GET_ORDER_BY_AZ,
          GET_ORDER_BY_ZA,
          GET_ORDER_BY_MAYOR,
          GET_ORDER_BY_MENOR,
          GET_ORDER_BY_NAME,
          ADD_CAR_PRODUCT,
          DELETE_CAR_PRODUCT,
          ADD_STORAGE_PRODCTS,
          GET_PRODUCT_BY_ID,
          NEXT,
          BACK,
          FORCE_CURRENT
         } from "./types";
import axios from "axios";
import Swal from "sweetalert2";

export function getProducts(){
  const endPoint = 'https://backend-6ao2.onrender.com/products/'
  //const endPoint = 'https://api-mundo-gym.onrender.com/products/'
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
export function getProductById(id){
  const endPoint = `https://backend-6ao2.onrender.com/products/${id}`
  return async (dispatch)=>{
    await axios.get(endPoint)
    .then(({data})=>{
      return dispatch({
        type:GET_PRODUCT_BY_ID,
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
      await axios(`https://backend-6ao2.onrender.com/filterByCategory?category=${cat}`)
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
      await axios("https://backend-6ao2.onrender.com/category")
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
      await axios("https://backend-6ao2.onrender.com/subcategory").then(({ data }) =>{
        return dispatch({
          type:GET_SUBCAT,
          payload:data
        })
      });
    }
  };
  export function getProdsBySubCat(subCat){
    return async (dispatch)=>{
      await axios(`https://backend-6ao2.onrender.com/filterSub?subcategory=${subCat}`).then(({ data }) =>{
        return dispatch({
        type:GET_PRODUCTS_BY_SUBCAT,
        payload:data
      })
    });
  }
};
export function getOrderAlphabeticAZ(){
  return async (dispatch)=>{
    await axios.get(`https://backend-6ao2.onrender.com/order/alphabetic/AZ`)
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
    await axios.get(`https://backend-6ao2.onrender.com/order/alphabetic/ZA`)
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
    await axios.get(`https://backend-6ao2.onrender.com/order/price/Mm`)
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
    await axios.get(`https://backend-6ao2.onrender.com/order/price/mM`)
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
      await axios(`https://backend-6ao2.onrender.com/products?name=${name}`)
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
export function addCarProduct(p){
  return{
    type:ADD_CAR_PRODUCT,
    payload:p
  }
}
export function deleteCarProduct(id){
  return{
    type:DELETE_CAR_PRODUCT,
    payload:id
  }
}
export function addStorageProducts(stock){
  return{
    type:ADD_STORAGE_PRODCTS,
    payload:stock
  }
}
export function next(){
  return{
    type:NEXT
  }
}
export function back(){
  return{
    type:BACK
  }
}
export function forceCurrent(num){
  return{
    type:FORCE_CURRENT,
    payload:num
  }
}
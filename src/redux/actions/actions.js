import { GET_PRODUCTS, SET_FLAG,GET_PRODUCTS_BY_CAT,GET_CAT,GET_SUBCAT,GET_PRODUCTS_BY_SUBCAT } from "./types";
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
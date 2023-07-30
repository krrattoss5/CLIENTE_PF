import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "../components/container/Container";
import { useEffect } from "react";
import {
  getCat,
  addCat,
} from "../redux/actions/actionsCategories";
import {
  getSubCats,
  addSubCategory,
} from "../redux/actions/actionsSubCats";

export default function CreateCategory() {
  const categ = useSelector((state) => state.categories.value);
  const subcategories = useSelector((state) => state.subCategories.value);

  const [cat, setCat] = useState({
    name: "",
  });

  const [sub, setSub] = useState({
    name: "",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (categ.length < 1) {
      dispatch(getCat());
    }
    if (subcategories.length < 1) {
      dispatch(getSubCats());
    }
  }, [categ, subcategories.length,dispatch]);

  const handlerInput = (e) => {
    if (e.target.id === "category") setCat({ ...cat, name: e.target.value })
    if (e.target.id === "subcategory") setSub({ ...sub, name: e.target.value });
  }

  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    if (cat.name.length < 3) {
      alert("La categoria debe tener mas de 4 letras")
      return;
    };  
    dispatch(addCat(cat.name));
    setCat({name:""});
    setSub({name:""});
    alert("Categoría creada con éxito")
  };

  const handleSubmitSubcategory = (e) => {
    e.preventDefault();
    if (sub.name.length < 3) {
      alert("La subcategoria debe tener mas de 4 letras")
      return;
    }; 
    dispatch(addSubCategory(sub.name));
    setCat({name:""});
    setSub({name:""});
    alert("Subcategoría creada con éxito");
  };

  return (
    <Container >
    <div className="flex flex-row mt-20 mb-12 justify-around">
      <div className="flex flex-row text-center">
        <div className="w-full max-w-xs flex flex-row ">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">            
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="category">
                Nueva Categoría
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                type="text"
                onChange={(e) => handlerInput(e)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={(e) => handleSubmitCategory(e)}>
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-row text-center">
        <div className="w-full max-w-xs flex flex-row ">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="subcategory">
                Nueva Subcategoría
              </label>              
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="subcategory"
                type="text"
                onChange={(e) => handlerInput(e)}/>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                type="button"
                onClick={(e) => handleSubmitSubcategory(e)}>
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-full max-w-xs flex flex-row ">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="categories">
                Categorías
              </label>
            </div>

            <div className="">
              {categ.map((category) => {
                return <div key={`name${category.name}`} className="">{category.name}</div>;
              })}
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-row">
        <div className="w-full max-w-xs flex flex-row ">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="subcategories">
                Subcategorías
              </label>
            </div>

            <div className="">
              {subcategories.map((subcategory) => {
                return <div key={subcategory.name} className="">{subcategory.name}</div>;
              })}
            </div>
          </form>
        </div>
      </div>
      </div>
      <hr></hr>
    </Container>
  );
}

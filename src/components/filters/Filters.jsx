import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFlag,
  getProdsByCat,
  getCat,
  getProducts,
  getSubCats,
  getProdsBySubCat,
  getOrderAlphabeticAZ,
  getOrderAlphabeticZA,
  getOrderPriceMm,
  getOrderPricemM
} from "../../redux/actions/actions";
import s from './Filters.module.css'
import SearchBar from "../searchBar/SearchBar";

export default function Filters(){
  const dispatch = useDispatch()
  const { category, subCategory,flag } = useSelector(s=>s)
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");


  const orderAlphabetic = (e) => {
    if (e.target.value === "asc") {
      dispatch(getOrderAlphabeticAZ());
    } else {
      dispatch(getOrderAlphabeticZA());
    }
  };

  const orderPrice = (e) => {
    if (e.target.value === "Mm") {
      dispatch(getOrderPriceMm());
    } else {
      dispatch(getOrderPricemM());
    }
  };

  // const orderCategoryAlphabetic = (e) => {
  //   if (e.target.value === "asc") {
  //     dispatch(getOrderCategoryAlphabeticAZ(currency.id));
  //   } else {
  //     dispatch(getOrderCategoryAlphabeticZA(currency.id));
  //   }
  // };

  // const orderPriceCategory = (e) => {
  //   if (e.target.value === "Mm") {
  //     dispatch(getOrderPriceCategoryMm(currency.id));
  //   } else {
  //     dispatch(getOrderPriceCategorymM(currency.id));
  //   }
  // };

  // const orderNameAlphabetic = (e) => {
  //   if (e.target.value === "asc") {
  //     dispatch(getOrderNameAlphabeticAZ(flag.slice(7)));
  //   } else {
  //     dispatch(getOrderNameAlphabeticZA(flag.slice(7)));
  //   }
  // };
  // const orderPriceName = (e) => {
  //   if (e.target.value === "Mm") {
  //     dispatch(getOrderPriceNameMm(flag.slice(7)));
  //   } else {
  //     dispatch(getOrderPriceNamemM(flag.slice(7)));
  //   }
  // };

  const handlerFlag = (e) => {
    dispatch(setFlag(e.target.value));
    dispatch(getProdsByCat(e.target.value));
    setSelectedCategory(e.target.value);
    setSelectedSubCategory("");
  };
  const handlerSubFlag = (e) => {
    dispatch(setFlag(`sub/${e.target.value}`));
    dispatch(getProdsBySubCat(e.target.value));
    setSelectedSubCategory(e.target.value);
  };

  const getAllProducts = () => {
    setSelectedCategory("");
    setSelectedSubCategory("");
    dispatch(getProducts());
    dispatch(setFlag(false));
  };

  useEffect(() => {
    if (!category.length) {
      dispatch(getCat());
      dispatch(getSubCats());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const orderSubCategoryAlphabetic = (e) => {
  //   if (e.target.value === 'asc') {
  //     dispatch(getOrderSubCategoryAlphabeticAZ(subCurrency.name))
  //   } else {
  //     dispatch(getOrderSubCategoryAlphabeticZA(subCurrency.name))
  //   }
  // };

  // const orderPriceSubCategory = (e) => {
  //   if (e.target.value === 'Mm') {
  //     dispatch(getOrderPriceSubCategoryMm(currency.id))
  //   } else {
  //     dispatch(getOrderPriceSubCategorymM(currency.id))
  //   }
  // }

  return (
    <div className={s.container}>
      <p
        onClick={getAllProducts}
        className={s.all}
      >
        Todo
      </p>

      <select
        value={selectedCategory}
        onChange={handlerFlag}
        className={s.selects}
      >
        <option disabled value={'default'}>
          Categorias
        </option>
        {category.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>

      <select
      value={selectedSubCategory}
      onChange={handlerSubFlag}
      className={s.selects}>
        <option disabled value={'default'}>Sub Categorias</option>
        {subCategory.map((c) =>
          <option key={c.name}>{c.name}</option>
        )}
      </select>

      {!flag ? (
        <select
          onChange={orderAlphabetic}
          className={s.selects}
        >
          <option disabled value={'default'}>
            Orden
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      ) : null}

      {!flag ? (
        <select
          onChange={orderPrice}
          className={s.selects}
        >
          <option disabled value={'default'}>
            Precio
          </option>
          <option value="mM">Menor - Mayor</option>
          <option value="Mm">Mayor - Menor</option>
        </select>
      ) : null}

      {/* {flag && flag.slice(0, 7) !== "search/" && flag.slice(0, 4) !== "sub/" ? (
        <select
          //onChange={orderCategoryAlphabetic}
          className="p-2 border-none rounded-md focus:outline-none bg-[rgb(28,41,71,1)] text-[#fff] font-bold cursor-pointer box-shadow-xl"
        >
          <option disabled selected>
            Orden
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      ) : null} */}

      {/* {flag && flag.slice(0, 7) !== "search/" && flag.slice(0, 4) !== "sub/" ? (
        <select
          //onChange={orderPriceCategory}
          className="p-2 border-none rounded-md focus:outline-none bg-[rgb(28,41,71,1)] text-[#fff] font-bold  cursor-pointer box-shadow-xl"
        >
          <option disabled selected>
            Precio
          </option>
          <option value="mM">Menor - Mayor</option>
          <option value="Mm">Mayor - Menor</option>
        </select>
      ) : null} */}

      {/* {flag && flag.slice(0, 7) === "search/" ? (
        <select
          //onChange={orderNameAlphabetic}
          className="p-2 border-none rounded-md focus:outline-none bg-[rgb(28,41,71,1)] text-[#fff] font-bold cursor-pointer box-shadow-xl"
        >
          <option disabled selected>
            Orden
          </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      ) : null} */}

      {/* {flag && flag.slice(0, 7) === "search/" ? (
        <select
          //onChange={orderPriceName}
          className="p-2 border-none rounded-md focus:outline-none bg-[rgb(28,41,71,1)] text-[#fff] font-bold  cursor-pointer box-shadow-xl"
        >
          <option disabled selected>
            Precio
          </option>
          <option value="mM">Menor - Mayor</option>
          <option value="Mm">Mayor - Menor</option>
        </select>
      ) : null} */}
      {/* {flag && flag.slice(0,4) === 'sub/'?<select onChange={orderSubCategoryAlphabetic} className='p-2 border-none rounded-md focus:outline-none bg-[rgb(28,41,71,1)] text-[#fff] font-bold cursor-pointer box-shadow-xl'>
        <option  disabled select
        Orden
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>:null} */}

      {/* {flag && flag.slice(0,4) === 'sub/'?<select onChange={orderPriceSubCategory} className={s.selects}>
        <option  disabled selected>
        Precio
        </option>
        <option value="mM">Menor - Mayor</option>
        <option value="Mm">Mayor - Menor</option>
      </select>:null} */}

      <div className={s.search}>
        <SearchBar />
      </div>
    </div>
  );
};

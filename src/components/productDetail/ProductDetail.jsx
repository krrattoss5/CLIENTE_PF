import React, { useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addCarProduct,deleteCarProduct } from "../../redux/actions/actions";
import s from './ProductDetail.module.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddTaskIcon from "@mui/icons-material/AddTask";

export default function ProductDetail() {

  const product = useSelector(s=>s.productById)
  const car = useSelector(s=>s.car)

  const dispatch = useDispatch()
  const id = useParams().id

  const [inCar,setInCar] = useState(false)

  useEffect(()=>{
    dispatch(getProductById(id))
  },[])

  useEffect(()=>{
    const inStack = car.find((p) => p.id === product.id);
    if (!inStack) {
      setInCar(false);
    } else {
      setInCar(true);
    }
  },[car,product.id])

  const handleInCar = ()=>{
    if(!inCar){
      dispatch(addCarProduct(product))
      setInCar(true)
    }else{
      setInCar(false)
      dispatch(deleteCarProduct(product.id))
    }
  }

  let before = product.price + (product.price * 1.4 / 2)
  return (
    <div className={s.container_detail}>
      <div className={s.headerCategory}>
        <a href='' alt='' className={s.category}>{product.category?.name}</a>
      </div>
      <img src={product.image} alt={product.name} className={s.image}/>
      <div className={s.containerInfo}>
        <p className={s.gancho}>Nuevo | Más de 10mil vendidos</p>
        <h1 className={s.title}>{product.name}</h1>
        <img src={product.image} alt={product.name} className={s.imageResponsive}/>
        <p className={s.description}>{product.description}</p>
        <p className={s.before}>${before}</p>
        <p className={s.price}><AttachMoneyIcon />{product.price}<span className={s.descuento}>{Math.ceil((before - product.price) / before * 100)}% OFF</span></p>
        <p className={s.stock}>Cantidad
          <select className={s.select}>
            <option defaultValue="1 unidad">1 unidad</option>
            <option value="2 unidades">2 unidades</option>
            <option value="3 unidades">3 unidades</option>
            <option value="4 unidades">4 unidades</option>
            <option value="5 unidades">5 unidades</option>
            <option value="6 unidades">6 unidades</option>
          </select>
          (Stock disponible: {product.stock})</p>

        <section className={s.section}>
          <span className={s.add}  onClick={()=>handleInCar()}>{!inCar?<AddShoppingCartIcon />:<AddTaskIcon />}</span>
          <button className={s.button}>Comprar Ahora</button>
        </section>
      </div>
    </div>
  );
}

import React from 'react'
import s from './Card.module.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useState } from 'react';
import { addCarProduct,deleteCarProduct } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function Card(props) {

  const car = useSelector(s=>s.car)
  const dispatch = useDispatch()
  const [inCar,setInCar] = useState(false)

  useEffect(() => {
    const inStack = car.find((p) => p.id === props.id);
    if (!inStack) {
      setInCar(false);
    } else {
      setInCar(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [car]);

  const handleInCar = ()=>{
    if(!inCar){
      dispatch(addCarProduct(props.p))
      setInCar(true)
    }else{
      setInCar(false)
      dispatch(deleteCarProduct(props.id))
    }
  }

  return (
    <div className={s.container}>
      <img src={props.image} alt={props.name} className={s.image}/>
      <p className={s.category}>{props.category?.name}</p>
      <h2 className={s.title}>{props.name}</h2>
      <p className={s.price}><AttachMoneyIcon/>{props.price}</p>

      <section className={s.section} onClick={()=>handleInCar()}>
        <span>{!inCar?<AddShoppingCartIcon />:<AddTaskIcon />}</span>
      </section>

    </div>
  )
}
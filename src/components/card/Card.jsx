import React from 'react'
import s from './Card.module.css'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function Card(props) {

  return (
    <div className={s.container}>
      <img src={props.image} alt={props.name} className={s.image}/>
      <p className={s.category}>{props.category?.name}</p>
      <h2 className={s.title}>{props.name}</h2>
      <p className={s.price}><AttachMoneyIcon/>{props.price}</p>
    </div>
  )
}
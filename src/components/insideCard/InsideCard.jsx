import React from 'react'
import s from './InsideCard.module.css'
import { useDispatch } from 'react-redux'
import { deleteCarProduct } from '../../redux/actions/actions'

export default function InsideCard(props) {

  const dispatch = useDispatch()

  return (
    <div className={s.container}>
      <img src={props.image} alt="" className={s.image}/>

      <div className={s.center}>
        <h3 className={s.title}>{props.name}</h3>
        <section className={s.section}>
          <span>{props.price}</span>
          <button className={s.M}>-</button>
          <span>0</span>
          <button className={s.m}>+</button>
          <span>=</span>
        </section>
      </div>

      <button className={s.button} onClick={()=>dispatch(deleteCarProduct(props.id))}>x</button>

    </div>
  )
}

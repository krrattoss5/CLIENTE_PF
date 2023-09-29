import React from 'react'
import s from './InsideCard.module.css'

export default function InsideCard(props) {
  return (
    <div className={s.container}>
      <button className={s.button}>x</button>
      <img src={props.image} alt="" className={s.image}/>
      <h3 className={s.title}>{props.name}</h3>

      <section className={s.section}>
        <span>{props.price}</span>
        <button className={s.M}>-</button>
        <span>0</span>
        <button className={s.m}>+</button>
        <span>=</span>
      </section>

    </div>
  )
}

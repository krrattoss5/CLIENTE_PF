import React from 'react'
import s from './InsideCard.module.css'

export default function InsideCard() {
  return (
    <div className={s.container}>
      <button className={s.button}>x</button>
      <img src="https://m.media-amazon.com/images/I/51oR240SXrL.__AC_SY300_SX300_QL70_FMwebp_.jpg" alt="" className={s.image}/>
      <h3 className={s.title}>Titulo</h3>

      <section className={s.section}>
        <span>precio</span>
        <button className={s.M}>-</button>
        <span>0</span>
        <button className={s.m}>+</button>
        <span>=</span>
      </section>

    </div>
  )
}

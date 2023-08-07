import React, { useState } from 'react'
import s from './Menu.module.css'

export default function Menu() {
  const [flag,setFlag] = useState(false)
  return (
    <div className={s.container}>
      <span className={s.line}></span>
      <span className={s.line}></span>
      <span className={s.line}></span>
    </div>
  )
}

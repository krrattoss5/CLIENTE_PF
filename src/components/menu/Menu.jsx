import React, { useState } from 'react'
import s from './Menu.module.css'
import { Link } from 'react-router-dom'
import Filters from '../filters/Filters'

export default function Menu() {
  const [flag,setFlag] = useState(false)

  const handleFlag = ()=>{
    !flag?setFlag(true):setFlag(false)
  }

  return (
    <div>
      <div className={s.container} onClick={()=>handleFlag()}>
        <span className={s.line}></span>
        <span className={s.line}></span>
        <span className={s.line}></span>
      </div>

      {!flag
      ?null
      :<div className={s.container1}>
        <Link to='/home' onClick={()=>handleFlag()} className={s.Link}>HOME</Link>
        <Link to='/home' onClick={()=>handleFlag()} className={s.Link}>ENTRAR</Link>
        <Link to='/home' onClick={()=>handleFlag()} className={s.Link}>SOBRE NOSOTROS</Link>
        <div className={s.Link}>
          <Filters />
        </div>
      </div>}
    </div>
  )
}

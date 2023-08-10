import React from 'react'
import s from './Car.module.css'
import { useState } from 'react'
import InsideCard from '../insideCard/InsideCard'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

export default function Car() {
  const [flag,setFlag] = useState(false)

  const handleFlag = ()=>{
    if(!flag){
      setFlag(true)
    }else{
      setFlag(false)
    }
  }

  return (
    <div className={s.container}>

      {!flag
      ?null
      :<div className={s.container1}>
        <InsideCard />
      </div>}

      <div className={s.menuB} onClick={()=>handleFlag()}>
        <ShoppingCartIcon />
        <span className={s.bubble}></span>
      </div>

    </div>
  )
}

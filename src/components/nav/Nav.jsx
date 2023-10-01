import React from 'react'
import s from './Nav.module.css'
import icon from '../../assets/Icon.png'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import SearchBar from '../searchBar/SearchBar'
import NavBox from '../navBox/NavBox';
import { useState } from 'react';

export default function Nav() {

  const [flag, setFlag] = useState(false)

  const handlerFlag = ()=>{
    return !flag?setFlag(true):setFlag(false)
  }

  return (
    <div className={s.container}>
      <a href="/#/home"><img src={icon} alt="mundo gym" className={s.image} /></a>
      <div className={s.buttons}>
      <a href="/#/home"><button className={s.button}><HomeIcon sx={{ fontSize: 25 }}/></button></a>
        <button className={s.button} onClick={()=>handlerFlag()}>Entrar <LoginIcon sx={{ fontSize: 25 }}/></button>
      </div>
      {!flag?null:<div className={s.NavBox}>
        <NavBox />
      </div>}
      <section className={s.section}>
        <SearchBar />
      </section>
    </div>
  )
}

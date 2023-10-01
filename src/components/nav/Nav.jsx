import React from 'react'
import s from './Nav.module.css'
import icon from '../../assets/Icon.png'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import SearchBar from '../searchBar/SearchBar'

export default function Nav() {
  return (
    <div className={s.container}>
      <a href="/#/home"><img src={icon} alt="mundo gym" className={s.image} /></a>
      <div className={s.buttons}>
      <a href="/#/home"><button className={s.button}><HomeIcon sx={{ fontSize: 25 }}/></button></a>
        <button className={s.button}>Entrar <LoginIcon sx={{ fontSize: 25 }}/></button>
      </div>
      <section className={s.section}>
        <SearchBar />
      </section>
    </div>
  )
}

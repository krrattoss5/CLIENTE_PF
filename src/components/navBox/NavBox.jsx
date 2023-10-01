import React from 'react'
import s from './NavBox.module.css'
import PersonIcon from '@mui/icons-material/Person';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function NavBox() {
  return (
    <div className={s.container}>
      <a href="#" className={s.item}><PersonIcon />Iniciar Sesión</a>
      <a href="#" className={s.item}><HowToRegIcon />Registrarse</a>
    </div>
  )
}

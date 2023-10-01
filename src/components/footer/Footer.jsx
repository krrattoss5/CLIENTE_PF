import React from 'react'
import s from './Footer.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import icon from  '../../assets/Icon.png'

export default function Footer() {
  return (
    <div className={s.container}>
      <div className={s.item}>
        <a href="/#/home"><img src={icon} alt="mundo gym" className={s.image} /></a>
      </div>
      <div className={s.item}></div>
      <div className={s.item}>
        <h3>Páginas</h3>
        <a href="/about">Sobre Nosotros</a>
        <a href="https://github.com/Mundo-Gym/Mundo-Gym"><GitHubIcon />Repo</a>
      </div>
      <span className={s.copy}>&#169; 2023 MundoGym</span>
    </div>
  )
}

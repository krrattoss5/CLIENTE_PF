import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProductByName } from '../../redux/actions/actions';
import SearchIcon from '@mui/icons-material/Search';
import s from './SearchBar.module.css'


export default function SearchBar() {
  const dispatch = useDispatch()
  const [name,setName] = useState('')

  const handlerSearch= (e)=>{
    setName(e.target.value)
  }

  const handlerSubmit=(e)=>{
    e.preventDefault()
    dispatch(getProductByName(name))
    setName("")
    //e.target.reset()
  }

  return (
    <form onSubmit={handlerSubmit} className={s.container}>
      <input id='search' onChange={handlerSearch} name='name' type="search" placeholder='Buscar productos...' className={s.imput}/>
      <button type='submit' className={s.button}><SearchIcon/></button>
    </form>
  )
}

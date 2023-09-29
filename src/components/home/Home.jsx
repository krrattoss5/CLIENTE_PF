import React from 'react'
import Cards from '../cards/Cards'
import { useSelector } from 'react-redux'
import s from './Home.module.css'
// import Slider from '../slider/Slider'
import Categories from '../categories/Categories'
import Carousel from '../carousel/Carousel'


export default function Home() {
  const products = useSelector(s=>s.products)
  return (
    <div className={s.container}>
      <Carousel />
      {/* <Slider /> */}
      <Categories />
      {!products?null:<Cards products={products}/>}
    </div>
  )
}

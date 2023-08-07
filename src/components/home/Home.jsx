import React from 'react'
import Card from '../card/Card'
import { useSelector } from 'react-redux'
import s from './Home.module.css'
import Slider from '../slider/Slider'


export default function Home() {
  const { products } = useSelector(s=>s)
  return (
    <div className={s.container}>
      <Slider />
      {!products?null:products.map(p=>
        <Card
        key={p.name}
        image={p.image}
        name={p.name}
        price={p.price}
        category={p.category}
        />
        )}
    </div>
  )
}

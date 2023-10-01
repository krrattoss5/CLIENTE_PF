import React from 'react'
import s from './Cards.module.css'
import Card from '../card/Card'
import Paginate from '../paginate/Paginate'
import { useSelector } from 'react-redux'

export default function Cards({current}) {

  const products = useSelector(s=>s.products)

  return (
    <div className={s.body}>
      <div className={s.container}>
      {!current?null:current.map(p=>
        <Card
        p={p}
        id={p.id}
        key={p.name}
        image={p.image}
        name={p.name}
        price={p.price}
        category={p.category}
        />
        )}
        </div>
       {!products?null:<Paginate products={products}/>}
    </div>
  )
}

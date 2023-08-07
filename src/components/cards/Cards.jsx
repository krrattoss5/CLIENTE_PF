import React from 'react'
import s from './Cards.module.css'
import Card from '../card/Card'

export default function Cards({products}) {
  return (
    <div className={s.container}>
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

import React from 'react'
import s from './Car.module.css'
import { useState } from 'react'
import InsideCard from '../insideCard/InsideCard'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStorageProducts } from '../../redux/actions/actions'

export default function Car() {
  const [flag,setFlag] = useState(false)
  const car = useSelector(s=>s.car)
  const dispatch = useDispatch()

  const handleFlag = ()=>{
    if(!flag){
      setFlag(true)
    }else{
      setFlag(false)
    }
  }

  useEffect(() => {
    const item = localStorage.getItem("car");
    const stock = JSON.parse(item);
    if (stock.length) {
      dispatch(addStorageProducts(stock));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  useEffect(()=>{
    const item = localStorage.getItem("car");
    const stock = JSON.parse(item);
    if(car.length > 0){
      localStorage.setItem("car", JSON.stringify(car))
    }else if(car !== stock){
      localStorage.setItem("car", JSON.stringify(car))
    }
  },[car,dispatch])

  // useEffect(() => {
  //   //dispatch(updateTotal(0));
  //   //let aux = 0;
  //   //});
  //   //dispatch(updateTotal(aux));
  // }, [car,dispatch]);

  return (
    <div className={s.container}>

      {!flag || !car.length
      ?null
      :<div className={s.container1}>
        {
          car.map(p=>
            <InsideCard
              key={p.id + p.name}
              id={p.id}
              image={p.image}
              name={p.name}
              price={p.price}
            />
          )
        }
      </div>}

      <div className={s.menuB} onClick={()=>handleFlag()}>
        <ShoppingCartIcon />
        {!car.length?null:<span className={s.bubble}>{car.length}</span>}
      </div>

    </div>
  )
}

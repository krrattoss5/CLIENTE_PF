import React,{useEffect} from 'react'
import Cards from '../cards/Cards'
import { useSelector,useDispatch } from 'react-redux'
import s from './Home.module.css'
import Categories from '../categories/Categories'
import Carousel from '../carousel/Carousel'
import Paginate from '../paginate/Paginate'
import { forceCurrent } from '../../redux/actions/actions'


export default function Home() {
  const products = useSelector(s=>s.products)
  const numPaginate = useSelector((s) => s.paginateCurrency);
  const dispatch = useDispatch();

  let from = (numPaginate - 1) * 5;
  let to = numPaginate * 5;
  const current = products.slice(from, to);

  useEffect(() => {
    dispatch(forceCurrent(1));
  }, []);

  return (
    <div className={s.container}>
      <Carousel />
      {/* <Slider /> */}
      <Categories />
      {!products?null:<Cards current={current}/>}
    </div>
  )
}

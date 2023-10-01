import { useSelector,useDispatch } from 'react-redux'
import { next,back,forceCurrent } from '../../redux/actions/actions'
import s from './Paginate.module.css'

export default function Paginate({products}) {
  const dispatch = useDispatch()
  const numPagination = useSelector(s=>s.paginateCurrency)
  const last = Math.ceil(products.length / 5)

  function nexTo (){
    dispatch(next())
  }
  function backTo (){
    dispatch(back())
  }
  function forcePage (num){
    dispatch(forceCurrent(num))
  }

  return (
    <div className={s.container_pagination}>
      {numPagination <2?null:<button className={s.button_navigation_back} onClick={()=>backTo()}>Atras</button>}
      {numPagination > 3?<button className={s.force_button} onClick={()=>forcePage(1)}>1</button>:null}
      {numPagination < 3?null:<button className={s.button_number} onClick={()=>forcePage(numPagination - 2)}>{numPagination - 2}</button>}
      {numPagination < 2?null:<button className={s.button_number} onClick={()=>forcePage(numPagination - 1)}>{numPagination - 1}</button>}
      <span className={s.current_span}>{numPagination}</span>
      {numPagination > last-2?null:<button className={s.button_number} onClick={()=>forcePage(numPagination + 1)}>{numPagination + 1}</button>}
      {numPagination > last-3?null:<button className={s.button_number} onClick={()=>forcePage(numPagination + 2)}>{numPagination + 2}</button>}
      {numPagination === last?null:<button className={s.force_button} onClick={()=>forcePage(last)}>{last}</button>}
      {numPagination === last?null:<button className={s.button_navigation_next} onClick={()=>nexTo()}>Siguiente</button>}
    </div>
  )
}
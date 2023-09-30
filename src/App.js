import { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import { useDispatch,useSelector } from 'react-redux';
import { getProducts } from './redux/actions/actions'
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Slider from './components/slider/Slider';
import Car from './components/car/Car';
import ProductDetail from './components/productDetail/ProductDetail';
import Carousel from './components/carousel/Carousel';

function App() {

  const car = useSelector(s=>s.car)

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      {location.pathname !== '/'?<Nav />:null}
      {location.pathname !== '/'
      && location.pathname !== '/home'?<Carousel />:null}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/detail/:id' element={<ProductDetail />} />
      </Routes>
      {location.pathname !== '/'?<Footer />:null}
      {location.pathname !== '/'?<Menu />:null}
      {!car.length?null:<Car />}
    </div>
  );
}

export default App;
import { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import Landing from './components/landing/Landing';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions/actions'
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Slider from './components/slider/Slider';
import Car from './components/car/Car';

function App() {
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getProducts())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="App">
      {location.pathname !== '/'?<Nav />:null}
      {location.pathname !== '/'?<Slider />:null}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      {location.pathname !== '/'?<Footer />:null}
      {location.pathname !== '/'?<Menu />:null}
      <Car />
    </div>
  );
}

export default App;
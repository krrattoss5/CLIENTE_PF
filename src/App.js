import { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import { useDispatch } from 'react-redux';
import { getProducts } from './redux/actions/actions'
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

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
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
      {location.pathname !== '/'?<Footer />:null}
    </div>
  );
}

export default App;
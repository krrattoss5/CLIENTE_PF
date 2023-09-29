import React, { useState, useEffect } from 'react';
import s from './Carousel.module.css'; // Archivo de estilos CSS
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Carousel() {
  // Estado para mantener el índice de la imagen actual
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array de imágenes
  const images = [
    img1,
    img2,
    img3,
    img4
    // Agrega más imágenes según sea necesario
  ];

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Efecto para hacer que el carrusel se desplace automáticamente
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Cambia cada 5 segundos
    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  return (
    <div className={s.carousel}>
      <button className={s.prev_button} onClick={prevSlide}><ArrowBackIosIcon /></button>
      <img className={s.carousel_image} src={images[currentIndex]} alt={`Imagen ${currentIndex}`} />
      <button className={s.next_button} onClick={nextSlide}><ArrowForwardIosIcon /></button>
    </div>
  );
}

export default Carousel;
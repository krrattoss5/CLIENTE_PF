import s from './Landing.module.css'
import video from '../../assets/pexels.mp4'
import { Link } from 'react-router-dom';

export default function landing(){
  return (
      <div className={s.container1}>

        <video className={s.video} muted key={Date.now()} autoPlay loop >
          <source src={video} type="video/mp4" />
        </video>

        <section className={s.section}>
          <h1>
            SUEÑA SIN MIEDO,
            <br />
            ENTRENA SIN LIMITES
          </h1>

          <p>Adquiere los mejores suministros para acondionar <br /> tu gymn o para tu entrenamiento personal <br /> tenemos todo lo que buscas en un solo lugar!!</p>

          <Link className={s.Link} to='/home'><button>INICIO</button></Link>

        </section>
      </div>
  );
};
import React from 'react'
import s from './Slider.module.css'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export default function Slider() {
  return (
    <div className={s.slider}>
      <AwesomeSlider
        media={[
          {
            source: 'https://images.pexels.com/photos/4608175/pexels-photo-4608175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=350&dpr=1',
          },
          {
            source: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=350&dpr=1',
          },
          {
            source: 'https://images.pexels.com/photos/949128/pexels-photo-949128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=350&dpr=1',
          },
        ]}
      />
    </div>
  )
}
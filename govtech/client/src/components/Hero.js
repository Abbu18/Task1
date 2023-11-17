import React from 'react';
import '../styles/HeroStyles.css';


function Hero(props) {
  return (
    <div className={props.hName}>
      <img alt='Heroimage' src={props.heroImg}></img>
      <div className='hero-text'>
        <h1>{props.title}</h1>
        <p className='hero-p'>{props.text}</p>
      </div>
    </div>
  )
}

export default Hero

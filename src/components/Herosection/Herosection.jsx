import React from 'react';
import './herosection.css';
import HeroSectionImage from '../../assets/chicken_with_coke.jpg'

function Herosection() {
  return (
    <div className="container hero_section">
      <div className="grid section">
            <div className="hero_section-introduction">
              <h1>Pizza MAMA</h1>
              <p className='paragraph'>Pizza MAMA is an online application enabling authenticated users to view our restaurant's menu.</p>
              <q className='quote'>
              Beauty comes in all shapes and sizes. Small, large, square, thin crust, stuffed crust, extra toppings.</q> ~ <cite className='cite'>Anonymous</cite>
            </div>
            <div className="hero_section-image">
              <img src={HeroSectionImage} alt="hero-section" />
            </div>
      </div>
    </div>
  )
}

export default Herosection
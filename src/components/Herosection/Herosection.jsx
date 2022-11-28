import React from 'react';
import './herosection.css';
import HeroSectionImage from '../../assets/chicken_with_coke.jpg'

function Herosection() {
  return (
    <div className='hero__section'>
        <div className="container">
          <div className="hero__section-content">
            <div className="hero__section-introduction">
                <h1>Pizza MAMA is an online application enabling users to view our restaurant's menu.</h1>
                <q>Beauty comes in all shapes and sizes. Small, large, square, thin crust, stuffed crust, extra toppings.</q> ~ <cite>Anonymous</cite>
            </div>
            <div className="hero__section-image">
              <img src={HeroSectionImage} alt='hero-section'/>
              <h3>Order Online</h3>
              <p>Simple and convient just on your phone.</p>
                <br />
              <h3>View menu</h3>
              <p>Explore our wide range of delicious and healthy food items</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Herosection
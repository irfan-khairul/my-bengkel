import React from 'react'
import './Hero.css'
import arrow_icon from '../Asset/arrow.png'
import hero_img from '../Asset/my_bengkel/comp-logo_nobg_2.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>Tired of asking around about your dented muffler?</h2>
            <div className="hero-hand-icon">
                {/* <p>new</p>
                <img src={hand_icon} alt="" /> */}
            </div>
            <p>Search your</p>
            <p>best bengkel</p>
            <p>within seconds</p>
            <div className="hero-latest-btn">
                <div>Search workshop</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero
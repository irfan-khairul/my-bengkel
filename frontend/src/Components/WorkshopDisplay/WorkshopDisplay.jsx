import React from 'react'
import './WorkshopDisplay.css'
import star_icon from '../Asset/star_icon.png'
import star_dull_icon from '../Asset/star_dull_icon.png'

const WorkshopDisplay = (props) => {
    const {workshop} = props
  return (
    <div className='workshopdisplay'>
        <div className="workshopdisplay-left">
            {/* <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div> */}
            <div className="workshopdisplay-img">
                <img className='workshopdisplay-main-img' src={workshop.image} alt="" />
            </div>
        </div>
        <div className="workshopdisplay-right">
            <h1>{workshop.name}</h1>
            <div className="workshopdisplay-right-stars">
                <img src={star_icon} alt="" />                
                <img src={star_icon} alt="" />                
                <img src={star_icon} alt="" />                
                <img src={star_icon} alt="" />                
                <img src={star_dull_icon} alt="" />    
                <p>(46)</p>            
            </div>
            <div className="workshopdisplay-right-location">{workshop.location}</div>
            <div className="workshopdisplay-right-description">{workshop.description}</div>
            <button>Contact</button>
            <p className='workshopdisplay-right-category'></p>
        </div>
    </div>
  )
}

export default WorkshopDisplay
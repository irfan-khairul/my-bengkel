import React from 'react'
import './Breadcrumbs.css'
import arrow_icon from '../Asset/breadcrum_arrow.png'

const Breadcrumbs = (props) => {
    const {product} = props;
    return (
    <div className='breadcrumb'>
        HOME <img src={arrow_icon} alt="" /> 
        SHOP <img src={arrow_icon} alt="" /> 
        {product.category} <img src={arrow_icon} alt="" /> 
        {product.name}
    </div>
    )
}

export default Breadcrumbs
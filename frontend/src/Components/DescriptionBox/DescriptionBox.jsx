import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (32)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An online car workshop, virtual platform designed to assist users with 
                various aspects of car care and maintenance. 
                We provide includes a range of features and functionalities aimed at 
                helping users troubleshoot issues, learn about vehicle maintenance, 
                and access services remotely. </p>
        </div>  
    </div>
  )
}

export default DescriptionBox
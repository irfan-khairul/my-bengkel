import React from 'react'
import './Place.css'
import { Link } from 'react-router-dom'

const Place = (props) => {
  return (
    <div className='place'>
        <Link to={`/workshop/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <p><b>{props.location}</b></p>
    </div>
  )
}

export default Place
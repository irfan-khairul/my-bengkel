import React from 'react'
import './Popular.css'
import all_workshop from '../Asset/Data/all_workshop'
import Place from '../Place/Place'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>Workshop Viral</h1>
        <hr />
        <div className="popular-place">s
            {all_workshop.map((item, i)=>{
                return <Place 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image}
                description={item.description}
                location={item.location} 
                work={item.work}/>
            })}
        </div>
    </div>
  )
}

export default Popular
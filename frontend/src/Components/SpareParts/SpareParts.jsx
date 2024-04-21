import React from 'react'
import './SpareParts.css'
import new_colletion from '../Asset/Data/all_product'
import Item from '../Items/Item'

const SpareParts = () => {
  return (
    <div className='spare-collections'>
        <h1>Spare Parts</h1>
        <hr />
        <div className="collections">
            {new_colletion.map((item, i)=>{
                return <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default SpareParts
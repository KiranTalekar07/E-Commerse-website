import React from 'react'
import './Popular.css'
import { DataProduct } from '../Assets/Assets/Data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className='popular-item'>
{
   DataProduct.map((item,i)=>{
    return <Item key={i} id={item.id} name={item.name}
    image={item.image}
    new_price={item.newPrice}
    old_price={item.oldPrice}
    />
   })
}        

        </div>
    </div>
  )
}

export default Popular

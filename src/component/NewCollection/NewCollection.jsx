import React from 'react'
import './NewCollection.css';
import new_Collections from '../Assets/Assets/new_Collections';
import Item from '../Item/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className='collections'>
        {
          new_Collections.map((item,i)=>{
            return <Item  key={i} id={item.id} name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            />
          })
        }

      </div>
      
    </div>
  )
}

export default NewCollection

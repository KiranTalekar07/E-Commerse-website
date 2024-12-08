import React from 'react'
import IndividualIntervalsExample from '../component/Hero/Hero'
//import Item from '../component/Item/Item'
import Popular from '../component/Popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollection from '../component/NewCollection/NewCollection'
import NewsLetter from '../component/NewsLetter/NewsLetter'


const Shop = () => {
  return (
    <div>
     <IndividualIntervalsExample/>
     <Popular/>
     <Offers/>
     <NewCollection/><br></br>
     <NewsLetter/>
    </div>
  )
}

export default Shop

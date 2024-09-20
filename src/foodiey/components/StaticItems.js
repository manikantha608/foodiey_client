import React, { useState } from 'react'
// import img1 from "../assets/Dosa.jpg"
import { itemData } from '../data'
const StaticItems = () => {
  const [displayItem,setDisplayItem] = useState(itemData)                  
  return (
    <div className='itemSection'>
       {
        displayItem.map((item,index)=>{
                    console.log(item.item_img)
                    // console.log("img1",img1)
            return(
              <div key={index} className='gallery'>
                 <img src={item.item_img} alt="image"/>   
              </div>      
            )        
        })
       }
    </div>
  )
}

export default StaticItems

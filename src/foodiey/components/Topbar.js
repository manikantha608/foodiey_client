import React from 'react'
import { Link } from 'react-router-dom'
const Topbar = () => {
  return (
    <div className='topBarSection'>
      <div className='companyTitle'>
        <Link to="/" className='link'>
          <h2>Foodiey</h2>  
        </Link>          
      </div>
      <div className='searchBox'>
         <input type='text' placeholder='Search...'/>           
      </div>
      <div className='userAuth'>
         Login / Signup           
      </div>
    </div>
  )
}

export default Topbar




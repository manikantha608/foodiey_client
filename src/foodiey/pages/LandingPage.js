import React from 'react'
import Topbar from '../components/Topbar'
import StaticItems from '../components/StaticItems'
import Chains from '../components/Chains'
import FirmCollections from '../components/FirmCollection'
import ProductMenu from '../components/ProductMenu'

const LandingPage = () => {
  return (
    <div>
      <Topbar/>
      <div className='landingSection'>
      <StaticItems/>
      <Chains/>
      <FirmCollections/>
      <ProductMenu/>
      </div>
    </div>
  )
}

export default LandingPage

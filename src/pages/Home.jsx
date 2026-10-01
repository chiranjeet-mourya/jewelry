import React from 'react'
import HeroSection from '../components/HeroSection'
import BestSeller from '../components/BestSeller'
import Category from '../components/Category'
import Collection from '../components/Collection'
import NewArrivals from '../components/NewArrivals'
import JewelryFeatures from '../components/JewelryFeatures'
import CraftsmanshipSection from '../components/CraftsmanshipSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <BestSeller/>
      <Category/>
      <Collection/>
      <NewArrivals/>
      <CraftsmanshipSection/>
      <JewelryFeatures/>
    </div>
  )
}

export default Home

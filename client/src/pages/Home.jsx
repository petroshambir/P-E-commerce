import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Men from '../components/Men.jsx'
import OurPolicy from '../components/OurPolicy'
import NewsLaterBox from '../components/NewsLaterBox'
import Women from '../components/Women'
import Kids from '../components/Kids'

function Home() {
  return (
    <div>
    <Hero/>
    <LatestCollection/>
    <BestSeller/>
    <Men/>
    <Women/>
    <Kids/>
    <OurPolicy/>
    <NewsLaterBox/>

    </div>
  )
}

export default Home
import React from 'react'
import HomePage from './home/page';
import WhoWeAre from '@/components/WhoWeAre';
import Business from '@/components/Business';
import Features from '@/components/Features';
import Provide from '@/components/Provide';
import Testimonial from '@/components/Why';


const Home = () => {
  return (
    <>
      <HomePage/>
      <WhoWeAre/>
      <Testimonial/>
      <Business/>
      <Features/>
      <Provide/>
    </>
  )
}

export default Home;

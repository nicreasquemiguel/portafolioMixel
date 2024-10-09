import React from 'react'
import Landing from './Landing'
import Skills from './Skills'
import Banner from './Banner'
import Experience from './Experience'
import Projects from './Projects'

const Home = () => {
  return (
    <div className=' grid grid-cols-3 snap-y snap-mandatory duration-500 h-screen w-screen overflow-x-hidden'>
        <Banner />
        <Landing />
        <Skills />
        <Projects/>

    </div>
  )
}

export default Home
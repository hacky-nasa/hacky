import React from 'react'
import Hero from './sections/Hero'
import Info from './sections/Info'
import TestKnowledge from './sections/TestKnowledge'

const HomeModule = () => {
  return (
    <div className="w-full flex flex-col pt-[50px]">
      <Hero />
      <Info />
      <TestKnowledge />
    </div>
  )
}

export default HomeModule

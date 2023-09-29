"use client"

import React from 'react'
import Navbar from '@/Components/Nav folder/Navbar'
import Hero from '@/Components/Hero folder/Hero'
import Diagnosys from '@/Components/Diagnosys History/Diagnosys'
import Alert from '@/Components/Alert/Alert'

const page = () => {
  return (
    <>
    <div className='bg-white h-screen w-screen'>
    <Navbar/>
    <Hero/>
    
    <div className="container bg-blue-500 h-screen rounded-t-[40px]">
    <Diagnosys/>
    <Alert/>
    </div>
    </div>
    
    </>
  )
}

export default page
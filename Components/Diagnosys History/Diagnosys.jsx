import React, { useState } from 'react'
import CheckUp_details from './CheckUp_details'

const Diagnosys = () => {
    
  return (
    <div className='checkUp history'>
    <h1 className='font-semibold text-center py-2 text-lg '>Diagnosis history...</h1>
    <div className='flex space-x-2 justify-center items-center'>
        <CheckUp_details/>
        <CheckUp_details/>
        <CheckUp_details/>
    </div>
    </div>
  )
}

export default Diagnosys
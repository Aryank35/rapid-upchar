import React from 'react'
import Diseases from './Diseases'

const Alert = () => {
  return (
    <div>
        <h1 className='font-semibold text-center py-2 text-lg text-white'>Alert!</h1>
        <div className='flex space-x-2 justify-center items-center'>
        <Diseases/>
        <Diseases/>
        <Diseases/>
        </div>
    </div>
  )
}

export default Alert
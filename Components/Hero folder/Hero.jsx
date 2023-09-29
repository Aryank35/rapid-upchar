import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  const [name, setName] = useState("Aryan");
  const [greet, setgreet] = useState("Morning")
  return (
    <div className='flex justify-between'>
        <div className="name h-[70px] my-6 bg-[#08cceb] w-[70%] rounded-r-2xl px-2">
            <h1 className='text-xl font-bold pt-2'>Hi,{name}!</h1>
            <p>Good {greet}</p>
        </div>
        <div className='my-auto flex flex-col items-center mt-6'>
        <div className='bg-[#18d8ee] flex justify-center items-center w-[50px] h-[50px]  rounded-full '>
        <FontAwesomeIcon className='text-4xl' icon={faPlus} />
        </div>
        <p className='text-[#75e4f5] font-semibold text-[9px] text-center mx-2'>Create New<br/>Appointment</p>
        </div>
    </div>
  )
}

export default Hero
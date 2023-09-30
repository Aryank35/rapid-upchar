import React, { useState } from 'react'

const Diseases = () => {
    const [disease, setdisease] = useState("Eye Flu")
  return (
    <div className=" bg-gray-200 h-[30%] w-[30%] rounded-xl p-2 flex flex-col justify-center items-center">
        <img className=' h-[30%] rounded-xl' src="./images/diagnosys.png" alt="" />
        <p className="date font-semibold text-red-600 text-xs">{disease}</p>
        <p className='text-black text-[7px] font-semibold'>Lorem ipsum dolor sit amet.</p>
        <p className='text-yellow-500 font-semibold text-[8px]'>Precautions...</p>
        <p className="desc text-black text-[5px] text-center">it is the description of your checkup history</p>
    </div>
  )
}

export default Diseases
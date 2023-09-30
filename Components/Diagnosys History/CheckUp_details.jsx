import React from 'react'

const CheckUp_details = () => {
  return (
        <div className=" bg-gray-200 h-[30%] w-[30%] rounded-xl p-2 flex flex-col items-center justify-center">
            <img className=' h-[30%] rounded-xl' src="./images/diagnosys.png" alt="" />
            <p className="date font-semibold text-black text-xs">12/03/20</p>
            <p className='text-black text-[7px] font-semibold'>Lorem ipsum dolor sit amet.</p>
            <p className="desc text-black text-[5px] text-center">it is the description of your checkup history</p>
        </div>
  )
}

export default CheckUp_details
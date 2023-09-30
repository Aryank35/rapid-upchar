import React, { useState } from 'react'
// import {faAlarmClock} from "@fortawesome/free-solid-svg-icons";

const TicketDetails = () => {
    const [Tid, setTid] = useState(28092023204)
    const [Doctor, setDoctor] = useState("Bijay Sahu")
    const [Specialist, setSpecialist] = useState("Med. Specialist")
    const [RoomNo, setRoomNo] = useState(104)
    const [Turn, setTurn] = useState(37)
    const [Time, setTime] = useState("1hr 45min")
  return (
    <div className='py-14 font-serif'>
        <div className="text-blue-700 text-center flex flex-col items-center justify-center py-auto">
            <div className="id">
              <h1 className='font-bold text-2xl'>Your Ticket</h1>
              <p className='font-semibold font-sans'>Id: {Tid}</p>
            </div>
            <div className="dr my-3">
              <p className='text-xl font-semibold'>Dr.Name: <span className='text-lg text-blue-400'>Dr.{Doctor}</span> </p>
              <p className='text-black'>( {Specialist} )</p>
            </div>
            <div className='space-y-2'>
              <p className='text-2xl font-semibold'>Room No: <span className='text-3xl font-bold text-black font-sans'>{RoomNo}</span></p>
              <p className='text-xl font-semibold'>Your Turn is after <span className='font-bold text-2xl text-purple-700 font-sans'>{Turn}</span></p>
              <p className='text-xl '>Est. Time: <span className='text-red-500 font-semibold font-sans'>{Time}</span></p>
            </div>
            <div className='flex space-x-20 items-center my-4'>
              <button className='bg-red-500 px-4 py-[2px] rounded-md text-black font-semibold'>Cancel</button>
              <img className='w-8 mb-2' src="./images/alarm-clock.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default TicketDetails
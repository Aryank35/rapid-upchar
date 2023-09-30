import React from 'react'
import TicketDetails from './TicketDetails'

const Ticket = () => {
  return (
    <div>
        <div className="py-3 h-fit w-screen flex flex-col justify-center items-center">
          <div className='h-[420px] w-[240px] bg-cover mx-auto' style={
            {
              backgroundImage:'url(./images/TicketTemp.png)'
             }
          }>
          {/* <img className='w-[80%] mx-auto' src="./images/TicketTemp.png" alt="" /> */}
            <TicketDetails/>
          </div>
        </div>
    </div>
  )
}

export default Ticket
"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass, faBars} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <>
    <div className='h-[50px]  flex justify-between m-auto'>
        <logo><img className='w-[85px] mx-2' src="./images/Logo.png" alt="Logo" /></logo>
        <div className='flex space-x-3 my-auto mx-2'>
        <FontAwesomeIcon className='text-black text-xl text-[#e49f0a]' icon={faMagnifyingGlass} />
        <FontAwesomeIcon className='text-black text-xl text-[#b27e04]' icon={faBars} />
        </div>
    </div>
    </> 
  )
}

export default Navbar
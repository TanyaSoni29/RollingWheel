import React from 'react'
import { FaTruckMoving } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { FaBicycle } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";

function SubNavbar() {
  return (
    <div className='w-11/12 lg:flex justify-center items-center p-2 mx-auto'>
       <div className='flex flex-row justify-center items-center border-r-[1px] border-r-slate-500 px-4 gap-2'>
           <IoBicycle className='text-teal-900 text-[1.8rem]'/>
           <p className='font-medium text-teal-800 whitespace-nowrap'>Save with Ride-To-Work</p>
       </div>
       <div className='flex flex-row justify-center items-center  border-r-[1px] border-r-slate-500 px-4 gap-2'>
       <FaBicycle className='text-teal-900 text-[1.8rem]' />
       <p className='font-medium text-teal-800 whitespace-nowrap'>Book a Repair / Service</p>
       </div>
       <div className='flex flex-row justify-center items-center  border-r-[1px] border-r-slate-500 px-4 gap-2'>
       <MdAdsClick className='text-teal-900 text-[1.5rem]'/>
       <p className='font-medium text-teal-800 whitespace-nowrap'>Click & Collect across the India</p>
       </div>
       <div className='flex flex-row justify-center items-center px-4 gap-2'>
       <FaTruckMoving className='text-teal-900 text-[1.8rem]' />
       <p className='font-medium text-teal-800 whitespace-nowrap'>Express Delivery - $7.99</p>
       </div>
    </div>
  )
}

export default SubNavbar
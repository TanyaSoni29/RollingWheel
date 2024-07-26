import React from 'react'
import { FaTruckMoving } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { FaBicycle } from "react-icons/fa";
import { IoBicycle } from "react-icons/io5";

function SubNavbar() {
  return (
    <div className='lg:w-11/12 w-full grid grid-cols-2 place-content-start lg:flex -mt-20 lg:mt-0 lg:justify-center  lg:item-center py-2 lg:p-2 lg:mx-auto'>
       <div className='flex flex-row justify-start lg:justify-center items-center lg:border-r-[1px] lg:border-r-slate-500 lg:px-4 px-1 gap-2'>
           <IoBicycle className='text-teal-900 lg:text-[1.8rem] text-[18px]'/>
           <p className='font-medium text-[12px] lg:text-[1rem] text-teal-800 whitespace-nowrap'>Save with Ride-To-Work</p>
       </div>
       <div className='flex flex-row  justify-start lg:justify-center items-center  lg:border-r-[1px] lg:border-r-slate-500 lg:px-4 px-1 gap-2'>
       <FaBicycle className='text-teal-900 lg:text-[1.8rem] text-[18px]' />
       <p className='font-medium text-[12px] lg:text-[1rem] text-teal-800 whitespace-nowrap'>Book a Repair / Service</p>
       </div>
       <div className='flex flex-row  justify-start lg:justify-center items-center  lg:border-r-[1px] lg:border-r-slate-500 lg:px-4 px-1 gap-2'>
       <MdAdsClick className='text-teal-900 lg:text-[1.5rem] text-[18px]'/>
       <p className='font-medium text-[12px] lg:text-[1rem] text-teal-800 whitespace-nowrap'>Click & Collect across the India</p>
       </div>
       <div className='flex flex-row  justify-start lg:justify-center items-center lg:px-4 px-1 gap-2'>
       <FaTruckMoving className='text-teal-900 lg:text-[1.8rem] text-[18px]' />
       <p className='font-medium text-[12px] lg:text-[1rem] text-teal-800 whitespace-nowrap'>Express Delivery - $7.99</p>
       </div>
    </div>
  )
}

export default SubNavbar
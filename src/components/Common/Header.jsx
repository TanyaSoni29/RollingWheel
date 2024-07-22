/** @format */

import React, { useState } from 'react';
import LogoImg from '../../assets/Images/logo/LogoImage.png';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';
import { IoStorefrontSharp } from 'react-icons/io5';
import { BsCart2 } from 'react-icons/bs';
import { FaRegUser } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
    const [isOpen, setIsOpen] = useState();

	return (
		<>
			<header className='w-full flex lg:flex-row bg-gray-100 justify-center items-center'>
				<div className='w-11/12 flex lg:flex-col justify-between items-center'>
					<div className='w-full flex lg:flex-row justify-center items-center'>
						<div className='w-full flex lg:flex-row justify-center items-center'>
							<Link to='/'>
								<img
									src={LogoImg}
									
									loading='lazy'
									alt='Logo'
                                    className='w-52 object-cover'
								/>
							</Link>
						</div>

						<div className=' hidden md:flex flex-row justify-center items-center p-2 w-full relative'>
							<input
								className='w-[80%] h-[40px] border-green-900 border-[1px] rounded-md focus:outline-none p-2 shadow-md'
								placeholder='Search Product or Brand'
							/>
							<button className='bg-green-900 p-3 rounded-md absolute left-[82%] shadow-md'>
								<IoSearchOutline
									color='#fff'
									fontSize={18}
									className='font-semibold'
								/>
							</button>
						</div>
						<div className='w-full hidden lg:flex h-[40px] lg:flex-row justify-center items-center'>
							<div className='flex flex-col justify-center items-center relative hover-effect border-r-slate-400 border-r-[1px] px-6'>
								<IoStorefrontSharp
									fontSize={18}
									className='text-green-900'
								/>
								<p className='text-[12px]'>Store</p>
							</div>
							<div className='flex flex-col justify-center items-center relative hover-effect border-r-slate-400 border-r-[1px] px-6'>
								<FaRegUser
									fontSize={18}
									className='text-green-900'
								/>
								<p className='text-[12px]'>Sign In</p>
							</div>
							<div className='flex flex-col justify-center items-center relative hover-effect border-r-slate-400 border-r-[1px] px-6'>
								<IoMdHeart
									fontSize={18}
									className='text-green-900'
								/>
								<p className=' text-[12px]'>Wishlist</p>
							</div>
							<div className='flex flex-col justify-center items-center relative hover-effect px-6'>
								<BsCart2
									fontSize={18}
									className='text-green-900'
								/>
								<p className=' text-[12px]'>Cart</p>
							</div>
						</div>

                        <div className='flex lg:hidden gap-4 items-center'>
                          <button>
                            <GiHamburgerMenu fontSize={22}/>
                          </button>
                        </div>
					</div>
					{/* Menu Nav */}
					<div className='w-[80%] hidden lg:flex flex-row justify-evenly gap-4 items-center mt-4 py-4 text-green-800 font-semibold'>
						<div className='relative hover-effect-category'>BIKES</div>
						<div className='relative hover-effect-category'>ELECTRIC BIKES</div>
						<div className='relative hover-effect-category'>CLOTHING & HELMETS</div>
						<div className='relative hover-effect-category'>ACCESSORIES</div>
						<div className='relative hover-effect-category'>COMPONENTS</div>
						<div className='relative hover-effect-category'>MAINTENANCE</div>
						<div className='relative hover-effect-category'>SCOOTERS & SKATE</div>
						<div className='relative hover-effect-category'> SALE</div>
					</div>

				</div>
			</header>
		</>
	);
}

export default Header;

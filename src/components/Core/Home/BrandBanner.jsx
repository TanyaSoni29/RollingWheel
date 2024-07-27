/** @format */

import React from 'react';
import TrekBrandImg from '../../../assets/Images/biCycle/image5-removebg-preview.png';
import TrekBrandImg2 from '../../../assets/Images/biCycle/image4.jpg';
import { useInView } from 'react-intersection-observer';

function BrandBanner({ brand, brandDescription }) {
	const { ref: cycleImageRef, inView: isCycleImageIsVisible } = useInView();
	return (
		<div className='w-full flex justify-center items-center p-2 bg-gray-100 hover:bg-[#D2D2D2] transition-all duration-300 cursor-pointer mt-6'>
			<div className='w-full md:w-11/12 h-full flex justify-evenly items-center px-0 md:px-4'>
				<div className='w-[30%] h-[30%] md:w-[35%] md:h-[35%] xl:w-[20%] xl:h-[20%]'>
					<img
						src={TrekBrandImg}
						alt='Trek Brand'
						className={`'w-full h-full object-cover transition-transform duration-2000 delay-1500' ${
							isCycleImageIsVisible
								? 'translate-x-0 opacity-100'
								: 'translate-x-full opacity-0'
						}`}
						loading='lazy'
						ref={cycleImageRef}
					/>
				</div>
				<div className='w-[40%] md:w-[30%] xl:w-[25%] flex flex-col justify-center items-center gap-4'>
					<div className='border-black border-[2px] text-[1rem] md:text-xl lg:text-3xl font-bold py-2 sm:py-4 px-4 sm:px-6 text-lime-950 text-center'>
						{brand}
					</div>
					<p className='text-[0.7rem] md:text-[1rem] lg:text-2xl font-semibold text-center'>
						{brandDescription}
					</p>
				</div>
				<div className='w-[30%] h-[30%] md:w-[35%] md:h-[35%] xl:w-[20%] xl:h-[20%]'>
					<img
						ref={cycleImageRef}
						src={TrekBrandImg2}
						alt='Trek Brand'
						className={`'w-full h-full object-cover transition-transform duration-2000 delay-1500' ${
							isCycleImageIsVisible
								? 'translate-x-0 opacity-100'
								: 'translate-x-full opacity-0'
						}`}
					/>
				</div>
			</div>
		</div>
	);
}

export default BrandBanner;

/** @format */

import React from 'react';
import ShortAdsImage from '../../../assets/Images/electric-bike.jpg';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './ShortAdsSection.css';

function ShortAdsSection() {
	const { ref: headingRef, inView: headingIsVisible } = useInView();
	const { ref: shortDescriptionRef, inView: shortDescriptionIsVisible } =
		useInView({ rootMargin: '-200px' });
	const { ref: buttonRef, inView: buttonIsVisible } = useInView();

	return (
		<div className='mt-8 w-full h-[25rem] lg:h-[22rem] relative z-[90] mb-8'>
			<img
				src={ShortAdsImage}
				alt='Short Description of Shop'
				className='w-full h-full object-cover'
				loading='lazy'
			/>
			<div className='w-full h-full absolute right-0 top-0 z-[88] bg-black opacity-[0.35]'></div>
			<div className='w-[40%] h-full flex flex-col gap-4 lg:gap-4 xl-gap-6 justify-center items-center text-center absolute top-0 right-0 z-[89] bg-[#005a53cc]'>
				<div className='w-[70%] lg:w-[50%] flex flex-col justify-center items-center text-white gap-4 md:gap-6'>
					<h2
						ref={headingRef}
						className={`'w-full font-bold text-xl md:text-2xl transition-transform duration-2000 delay-500 ease-in-out' ${
							headingIsVisible
								? 'translate-x-0 opacity-100'
								: 'translate-x-full opacity-0'
						}`}
					>
						EXPLORE OUR BIKES & IN-STORE SERVICES
					</h2>
					<p
						ref={shortDescriptionRef}
						className={`w-full font-semibold text-[1rem]  transition-opacity duration-2000 delay-1500 ${
							shortDescriptionIsVisible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						Stop by today for expert bike and fitting consultations, a great
						variety of top bike brands, and full service center assistance.
					</p>
					<Link
						to='/'
						className='w-full'
					>
						<button
							ref={buttonRef}
							className={`w-full uppercase bg-white text-green-700 px-3 whitespace-nowrap rounded-sm border-green-900 border-[1px] p-3 transition-transform duration-2000 delay-1500 ${
								buttonIsVisible ? 'translate-y-0' : 'translate-y-4'
							}`}
						>
							Find Showroom
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default ShortAdsSection;

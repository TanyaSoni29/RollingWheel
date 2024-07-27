/** @format */

import React from 'react';
import bromptonBrand from '../../../assets/Images/Brands/brompton-v2.svg';
import cannondaleBrand from '../../../assets/Images/Brands/cannondale.svg';
import cubeBrand from '../../../assets/Images/Brands/CUBE-Logo-schwarz.svg';
import specializedBrand from '../../../assets/Images/Brands/specialized_logo.svg';
import trekBrand from '../../../assets/Images/Brands/trek.svg';
import pinnacleBrand from '../../../assets/Images/Brands/pinnacle-v2.svg';

function BrandListSection() {
	const BrandList = [
	
		{
			id: 2,
			image:  cannondaleBrand ,
		},
    
		{
			id: 3,
			image:  cubeBrand  ,
		},
        {
			id: 1,
			image:  bromptonBrand ,
		},

		{
			id: 4,
			image:  specializedBrand  ,
		},

		{
			id: 5,
			image:  trekBrand  ,
		},

		{
			id: 6,
			image:  pinnacleBrand  ,
		},
	];
	return (
		<div className='w-full h-48 sm:h-32 flex justify-center items-center mt-2 mb-4 sm:mt-6'>
			<div className='w-full h-[25%] flex justify-center items-start sm:items-center gap-4 flex-wrap sm:gap-6 lg:gap-10'>
				{BrandList.map(({ id, image }) => (
					<div
						key={id}
						className='h-[60%] sm:h-[75%] lg:h-full px-2 lg:px-4'
					>
						<img
							src={image}
							alt='Brand Logo Image'
							loading='lazy'
                            className='w-full h-full object-cover cursor-pointer'
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default BrandListSection;

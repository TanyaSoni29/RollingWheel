/** @format */

import React from 'react';
import Image from '../../../assets/Images/categoryCard/category-brand-cube.jpg';

function CategoryCard() {
	return (
		<div className='w-11/12 h-full flex flex-col justify-center items-center '>
			<div className='flex flex-col justify-center items-center gap-4 cursor-pointer group'>
				<div className='w-[500px] h-[500px]'>
					<img
						src={Image}
						className='w-full h-full object-cover'
					/>
				</div>
				<button className='w-[60%] uppercase px-4 py-3 border-cyan-800 border-[1px] group-hover:border-cyan-950 cursor-pointer group-hover:border-t-2'>
					Shop Now{' '}
				</button>
			</div>
		</div>
	);
}

export default CategoryCard;

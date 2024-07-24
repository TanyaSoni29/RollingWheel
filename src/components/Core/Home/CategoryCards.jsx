/** @format */

import React from 'react';
import CategoryCard from './CategoryCard';
import BikeImg from '../../../assets/Images/categoryCard/category-electric-road.jpg';
import HelmetCategoryImg from '../../../assets/Images/categoryCard/category-dept-helmets.jpg';
import ClothingImg from '../../../assets/Images/categoryCard/category-dept-clothing.jpg';
import AccessoriesImg from '../../../assets/Images/categoryCard/category-dept-lights.jpg';
import ElectricBikeImg from '../../../assets/Images/categoryCard/category-electric-mountain.jpg';
import ComponentImg from "../../../assets/Images/categoryCard/category-dept-bikes.jpg"

function CategoryCards() {
	const CategoryCardData = [
		{
			id: 1,
			image: BikeImg,
			title: 'Bikes',
		},
		{
			id: 2,
			image: ElectricBikeImg,
			title: 'Electric Bikes',
		},
		{
			id: 3,
			image: ClothingImg,
			title: 'Clothing',
		},
		{
			id: 4,
			image: HelmetCategoryImg,
			title: 'Helmets',
		},
		{
			id: 5,
			image: AccessoriesImg,
			title: 'Accessories',
		},
		{
			id: 6,
			image: ComponentImg,
			title: 'Components',
		},
	];
	return (
		<div className='mt-8 mb-8 w-full h-full flex justify-center items-center gap-6'>
			<div className='grid grid-cols-3 gap-4 place-content-center'>
				{CategoryCardData.map((card) => (
					<CategoryCard
						key={card.id}
						image={card.image}
						title={card.title}
					/>
				))}
			</div>
		</div>
	);
}

export default CategoryCards;

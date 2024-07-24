/** @format */

import React from 'react';
import CategoryCard from './CategoryCard';

function CategoryCards() {
	return (
        <div className='mt-8 mb-8 w-full h-full flex justify-center items-center gap-6'>
        <div className='grid grid-cols-3 gap-4 place-content-center'>
			<CategoryCard />
			<CategoryCard /> 
            <CategoryCard /> 
            <CategoryCard /> 
            <CategoryCard />
			<CategoryCard />
		</div>
        </div>
		
	);
}

export default CategoryCards;

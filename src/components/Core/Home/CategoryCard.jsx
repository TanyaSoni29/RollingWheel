

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './CategoryCard.css';
function CategoryCard({ image, title }) {
    const { ref, inView } = useInView({
        triggerOnce: true, 
    });

    return (
        <div className={`w-11/12 h-full flex flex-col justify-center items-center ${inView ? 'card-visible' : 'card-hidden'}`} ref={ref}>
            <div className='relative z-[90] flex flex-col justify-center items-center gap-5 cursor-pointer group transition-transform duration-1000'>
                <div className='w-[500px] h-[500px] overflow-hidden'>
                    <img
                        src={image}
                        className='w-full h-full object-cover duration-700 transition-all group-hover:scale-105'
                    />
                </div>
                <button className='w-[60%] uppercase px-4 py-3 border-cyan-800 border-[1px] group-hover:border-cyan-950 cursor-pointer group-hover:border-t-2 group-hover:border-b-2 group-hover:-translate-y-2 transition-all duration-300'>
                    Shop Now
                </button>
                <div className='absolute z-[80] text-center left-6 bottom-20'>
                    <p className='text-white font-semibold text-6xl uppercase'>{title}</p>
                </div>
            </div>
        </div>
    );
}

export default CategoryCard;


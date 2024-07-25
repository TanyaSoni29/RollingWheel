/** @format */

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Image1 from "../../../assets/Images/biCycle/image1.jpg"
// import Image2 from "../../../assets/Images/biCycle/image2.jpg"
// import Image3 from "../../../assets/Images/biCycle/image3.jpg"
// import Image4 from "../../../assets/Images/biCycle/image4.jpg"
// import "./CycleSlider.css"

// function CycleSlider() {
//   const saleBanner = [
//     {
//       id: 1,
//       image: Image1,
//     },
//     {
//       id: 2,
//       image: Image2,
//     },
//     {
//       id: 3,
//       image: Image3,
//     },
//     {
//       id: 4,
//       image: Image4,
//     },
//   ];

//   return (
//     <div className="w-full relative">
//       <Swiper
//         modules={[Navigation]}
//         loop={true}
//         navigation={{
//           nextEl: '.custom-swiper-button-next',
//           prevEl: '.custom-swiper-button-prev',
//         }}
//         className="w-full cycle-swiper"
//       >
//         {saleBanner.map((banner) => (
//           <SwiperSlide key={banner.id} className='p-40'>
//             <div className="w-full h-full ">
//               <img
//                 src={banner.image}
//                 alt="demo Cycle"
//                 className="h-[90%] w-[90%] object-contain"
//                 loading='lazy'
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="custom-swiper-button-prev absolute left-60 top-1/2 z-[90] transform -translate-y-1/2 text-black text-2xl w-20 h-20 flex justify-center items-center shadow-md">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
//       </div>
//       <div className="custom-swiper-button-next absolute right-40  z-[90] top-1/2 transform -translate-y-1/2 text-black text-2xl w-20 h-20 flex justify-center items-center shadow-md">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//       </div>

//       <div className='w-[20%] absolute right-20 z-[80] top-[380px] flex flex-col items-center justify-center bg-slate-200 text-gray-800 text-center p-4 gap-2'>
//         <p className='font-semibold text-5xl'>Rolling Wheel </p>
//       <p className='font-medium'>Your Ultimate Destination for Sport Cycles and Gear</p></div>
//     </div>
//   );
// }

// export default CycleSlider;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image1 from '../../../assets/Images/biCycle/image1.jpg';
import Image2 from '../../../assets/Images/biCycle/image2.jpg';
import Image3 from '../../../assets/Images/biCycle/image3.jpg';
import Image4 from '../../../assets/Images/biCycle/image4.jpg';
import './CycleSlider.css';

function CycleSlider() {
	const saleBanner = [
		{
			id: 1,
			image: Image1,
			title: 'Specialized',
			description: 'Description for Cycle Model 1',
		},
		{
			id: 2,
			image: Image2,
			title: 'Specialized',
			description: 'Description for Cycle Model 2',
		},
		{
			id: 3,
			image: Image3,
			title: 'Specialized',
			description: 'Description for Cycle Model 3',
		},
		{
			id: 4,
			image: Image4,
			title: 'Specialized',
			description: 'Description for Cycle Model 4',
		},
	];

	return (
		<div className='w-full h-[700px] flex items-center justify-between '>
			<div className='w-[70%] h-full relative'>
				<Swiper
					modules={[Navigation]}
					loop={true}
					navigation={{
						nextEl: '.custom-swiper-button-next',
						prevEl: '.custom-swiper-button-prev',
					}}
					className='w-full h-full cycle-swiper'
				>
					{saleBanner.map((banner) => (
						<SwiperSlide
							key={banner.id}
							className='relative'
						>
							<div className='w-full h-full text-center flex items-center px-20'>
								<img
									src={banner.image}
									alt={`Cycle ${banner.id}`}
									className='h-[90%] w-[90%] object-contain'
									loading='lazy'
								/>
								<div className='absolute bottom-10 left-96 transform -translate-x-1/2 bg-white bg-opacity-75 p-4 text-center slide-up'>
									<h2 className='font-semibold text-3xl uppercase'>{banner.title}</h2>
									<p className='font-medium'>{banner.description}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
				<div className='custom-swiper-button-prev absolute left-10 top-1/2 z-[90] transform -translate-y-1/2 text-black text-2xl w-20 h-20 flex justify-center items-center shadow-md'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M15 19l-7-7 7-7'
						/>
					</svg>
				</div>
				<div className='custom-swiper-button-next absolute right-10 z-[90] top-1/2 transform -translate-y-1/2 text-black text-2xl w-20 h-20 flex justify-center items-center shadow-md'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M9 5l7 7-7 7'
						/>
					</svg>
				</div>
			</div>
			<div className='w-[30%] h-full flex justify-center items-center text-center'>
      <div className='w-[35%] h-[30%] flex flex-col gap-4 justify-center items-center bg-slate-100 select-none hover:bg-slate-200 transition-all duration-700'>
      <p className='font-bold text-6xl'>SPEED</p>
      <p className='font-semibold text-2xl'>RIDE THE WORLD</p>
      </div>
			
			</div>
		</div>
	);
}

export default CycleSlider;

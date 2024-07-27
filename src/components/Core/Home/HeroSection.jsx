/** @format */

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import './HeroSection.css';

function HeroSection() {
	const saleBanner = [
		{
			id: 1,
			image:
				'https://cdn.pixabay.com/photo/2015/11/28/11/26/sale-1067126_640.jpg',
		},
		{
			id: 2,
			image:
				'https://t4.ftcdn.net/jpg/04/35/69/67/360_F_435696774_e7vLWc20mTSLuasBHz8TIoOM7nsOMesq.jpg',
		},
		{
			id: 3,
			image: 'https://c8.alamy.com/comp/F3DH55/sale-concept-F3DH55.jpg',
		},
		{
			id: 4,
			image:
				'https://previews.123rf.com/images/lcs813/lcs8131803/lcs813180300028/97208054-fifty-red-percent-symbol-50-percentage-rate-special-offer-discount-3d-illustration-isolated-over.jpg',
		},
	];

	return (
		<div className='w-full'>
			<Swiper
				modules={[Pagination, Autoplay]}
				loop={true}
				pagination={{ clickable: true }}
				autoplay={{ delay: 3000 }}
				className='w-full'
			>
				{saleBanner.map((banner) => (
					<SwiperSlide key={banner.id}>
						<div className='w-full h-[178px] sm:h-[280px] md:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px]'>
							<img
								src={banner.image}
								alt='sale banner'
								className='h-full w-full object-cover'
								loading='lazy'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default HeroSection;

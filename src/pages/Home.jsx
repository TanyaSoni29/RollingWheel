/** @format */

import React from 'react';
import Footer from '../components/Common/Footer';
import HeroSection from '../components/Core/Home/HeroSection';
import SubNavbar from '../components/Common/SubNavbar';
import CycleSlider from '../components/Core/Home/CycleSlider';
import BrandBanner from '../components/Core/Home/BrandBanner';
import BrandListSection from '../components/Core/Home/BrandListSection';
import ShortAdsSection from '../components/Core/Home/ShortAdsSection';
import CategoryCards from '../components/Core/Home/CategoryCards';

function Home() {
	return (
		<div className='w-full mt-40'>
			<SubNavbar />
			<HeroSection />
			<BrandBanner
				brand='TREK'
				brandDescription='Trek Is Now Available'
			/>
			<CycleSlider />
			<BrandBanner
				brand='BROMPTON'
				brandDescription='Discover Brompton: Now Available at Rolling Wheel'
			/>
			<BrandListSection />
			<CategoryCards/>
			<ShortAdsSection />
			<Footer />
		</div>
	);
}

export default Home;

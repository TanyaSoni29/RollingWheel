/** @format */

import React from 'react';
import Footer from '../components/Common/Footer';
import HeroSection from '../components/Core/Home/HeroSection';
import SubNavbar from '../components/Common/SubNavbar';
import CycleSlider from '../components/Core/Home/CycleSlider';

function Home() {
	return (
		<div className='w-full mt-40'>
			
				<SubNavbar />
				<HeroSection />
				<CycleSlider />
			

			<Footer />
		</div>
	);
}

export default Home;

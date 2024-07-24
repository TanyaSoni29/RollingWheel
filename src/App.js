/** @format */

import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Common/Header';
import Home from './pages/Home';

function App() {
	return (
		<>
			<div className='w-screen min-h-screen flex flex-col'>
				<div className='relative'>
					<Header />
				</div>
				<Routes>
					<Route path='/' element={<Home />} />
                   
                </Routes>
				
			</div>
		</>
	);
}

export default App;

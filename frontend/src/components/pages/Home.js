import React from 'react';
import Banner from './home/Banner';

const Home = () => {
	return (
		<div>
			<Banner />
			<div className='bg-gray-400'>
				<div className='container mx-auto p-3' style={{ height: 500 + 'px' }}>
					<h1 className='text-xl font-semibold'>HILU GUDMURNING!</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;

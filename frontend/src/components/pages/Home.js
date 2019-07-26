import React from 'react';
import Banner from './home/Banner';

const Home = () => {
	return (
		<div>
			<Banner />
			<div className='bg-light'>
				<div className='container' style={{ height: 500 + 'px' }}>
					<h1>HILU GUDMURNING!</h1>
				</div>
			</div>
		</div>
	);
};

export default Home;

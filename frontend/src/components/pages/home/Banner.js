import React from 'react';

const Banner = () => {
	return (
		<div className='home-banner'>
			<div className='container mx-auto'>
				<h1 className='leading-none mb-3'>
					Pet Community
					<br />
					for everyone
				</h1>
				<h4 className='text-xl mb-8'>Helping our pets reach out to each other and to those who need home.</h4>
				<a href='#' className='btn btn-lg btn-outline-light mt-3 p-4 bg-main hover:bg-blue-600 text-white rounded text-xl'>
					Sign Up
				</a>
			</div>
		</div>
	);
};

export default Banner;

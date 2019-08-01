import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
	return (
		<div className='flex home-banner items-center text-gray-900'>
			<div className='flex-1 container mx-auto'>
				<h1 className='leading-none mb-3'>
					Pet Community
					<br />
					for everyone
				</h1>
				<h4 className='text-base mb-5'>Helping pets reach out to each other and to those who need home.</h4>
				<Link to='/' className='border border-orange-500 btn btn-lg hover:bg-gray-700 p-3 rounded text-orange-500 text-xl inline-block'>
					Sign Up
				</Link>
			</div>
		</div>
	);
};

export default Banner;
